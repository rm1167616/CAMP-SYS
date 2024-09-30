const router = require("express").Router();
const connection = require("../../db/dbconnection");
const util = require("util");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Joi = require("joi");

// Define the registration validation schema
const registrationSchema = Joi.object({
    email: Joi.string().email().max(40).required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().max(50).required(),
    phone: Joi.string().pattern(/^[0-9]+$/).max(15).required(),
    birthday: Joi.date().required(),
    gender: Joi.string().valid('male', 'female', 'other').required()
});

// Define the login validation schema
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

// Registration endpoint
router.post("/register", async (req, res) => {
    const { error } = registrationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }

    try {
        const query = util.promisify(connection.query).bind(connection);
        const emailExists = await query("SELECT * FROM user WHERE email = ?", [req.body.email]);
        if (emailExists.length > 0) {
            return res.status(400).json({ msg: "This email is already in use." });
        }

        const userObj = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            phone: req.body.phone,
            birthday: req.body.birthday,
            gender: req.body.gender,
            token: crypto.randomBytes(16).toString("hex")
        };

        const insertUserResult = await query("INSERT INTO user SET ?", userObj);
        res.status(201).json({ id: insertUserResult.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

// Login endpoint
router.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ errors: error.details[0].message });
    }

    try {
        const query = util.promisify(connection.query).bind(connection);
        const user = await query("SELECT * FROM user WHERE email = ?", [req.body.email]);
        
        if (user.length === 0) {
            return res.status(404).json({ msg: "The email or password not found." });
        }

        const checkPassword = await bcrypt.compare(req.body.password, user[0].password);
        if (checkPassword) {
            const { password, ...userData } = user[0];
            res.status(200).json(userData);
        } else {
            res.status(401).json({ msg: "Incorrect email or password." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
