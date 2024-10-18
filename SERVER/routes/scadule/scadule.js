const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require(`../../db/dbconnection`);
const util = require('util');

// Handle POST requests to /scadule/
router.post("/", async (req, res) => {
    try {
        // Get data from request body
        const { category, from, to } = req.body;

        // Use a promise to handle the database query
        const query = util.promisify(connection.query).bind(connection);

        // Query to get room numbers based on the category
        const roomsnumbers = await query("SELECT id FROM room WHERE type LIKE ?", [`%${category}%`]);

        // Check if rooms exist
        if (roomsnumbers.length === 0) {
            return res.status(404).json({ message: "No rooms found for the specified category." });
        }

        const roomid = roomsnumbers[0].id; // Assuming you're only interested in the first room

        // Query to get schedule data for the room
        const scaduleData = await query("SELECT * FROM roomscadule WHERE roomid = ?", [roomid]);
        

        // Send response with schedule data
        res.status(200).json(scaduleData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
