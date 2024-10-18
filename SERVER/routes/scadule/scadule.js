const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require(`../../db/dbconnection`);
const util = require('util');
const upload = require(`../../middleware/upload`);
const fs = require('fs');
const path = require('path');

//get availale room

router.get("/",async(req,res)=>{
    try
    {
        const { category , from , to} = req.body ;
        const query = util.promisify(connection.query).bind(connection);
        const roomsnumbers = await query("SELECT id,StartRoom, EndRoom FROM room WHERE type LIKE ?", [`%${category}%`]);
        const roomid = roomsnumbers[0].id;
        const scaduleData = await query("SELECT * FROM roomscadule WHERE roomid = ?", [roomid]);

        res.status(200).json(scaduleData);



    }
    catch(err){
        res.status(404).json(err);
    }
})






module.exports = router;  