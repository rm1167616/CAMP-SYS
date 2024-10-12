const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require(`../../db/dbconnection`);
const util = require('util');
const upload = require(`../../middleware/upload`);
const fs = require('fs');
const path = require('path');


//============= ENDPOINT CREATE ROOM ================//
router.post(
    "/create",
    upload.array("imgpath"),

    // Validation middleware
    [
        body('type').notEmpty().withMessage('Type is required'),
        body('descreption').notEmpty().withMessage('Description is required'),
        body('numOfRooms').isInt({ min: 1 }).withMessage('Number of Rooms must be at least 1'),
    ],

    async (req, res) => {
        try {
            const query = util.promisify(connection.query).bind(connection);

            // Handle validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { type, descreption, numOfRooms } = req.body;

            // Create object of room
            const roomObj = {
                type,
                descreption,
                numOfRooms,
            };
            const insertedRoom = await query("INSERT INTO room SET ?", roomObj);
            const insertedRoomId = insertedRoom.insertId;

            // Handle image validation
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ msg: "No images uploaded" });
            }

            const validExtensions = ['image/jpeg', 'image/png', 'image/gif'];
            const maxSize = 5 * 1024 * 1024; // 5MB

            const invalidFiles = req.files.filter(file => {
                return !validExtensions.includes(file.mimetype) || file.size > maxSize;
            });

            if (invalidFiles.length > 0) {
                return res.status(400).json({
                    msg: `Some files have invalid types or exceed size limit (5MB).`
                });
            }

            // Bulk insert image paths
            const files = req.files.map(file => ({
                imgpath: file.filename,
                roomID: insertedRoomId,
            }));

            await query("INSERT INTO roomimgs (imgpath, roomID) VALUES ?", [files.map(file => [file.imgpath, file.roomID])]);

            res.status(200).json({ msg: "Room created successfully!" });
        }
        catch (err) {
            res.status(500).json({ msg: "Server error", error: err });
        }
    }
);
//============= ENDPOINT UPDATE ROOM ================//
router.put(
    "/update/:id",
    upload.array("imgpath"),
    [
        body('type').optional().notEmpty().withMessage('Type cannot be empty'),
        body('descreption').optional().notEmpty().withMessage('Description cannot be empty'),
        body('numOfRooms').optional().isInt({ min: 1 }).withMessage('Number of Rooms must be at least 1'),
    ],

    async (req, res) => {
        try {
            const query = util.promisify(connection.query).bind(connection);
            const roomId = req.params.id;

            // Retrieve existing room
            const existingRoom = await query("SELECT * FROM room WHERE id = ?", [roomId]);
            if (existingRoom.length === 0) {
                return res.status(404).json({ msg: "Room not found" });
            }

            const { type, descreption, numOfRooms } = req.body;

            // Update room object, keeping old values if not provided
            const updatedRoom = {
                type: type || existingRoom[0].type,
                descreption: descreption || existingRoom[0].descreption,
                numOfRooms: numOfRooms !== undefined ? numOfRooms : existingRoom[0].numOfRooms,
            };

            // Update room in the database
            await query("UPDATE room SET ? WHERE id = ?", [updatedRoom, roomId]);

            // Handle image update if new files are uploaded
            if (req.files && req.files.length > 0) {
                const validExtensions = ['image/jpeg', 'image/png', 'image/gif'];
                const maxSize = 5 * 1024 * 1024; // 5MB

                const invalidFiles = req.files.filter(file => {
                    return !validExtensions.includes(file.mimetype) || file.size > maxSize;
                });

                if (invalidFiles.length > 0) {
                    return res.status(400).json({
                        msg: `Some files have invalid types or exceed size limit (5MB).`
                    });
                }

                // Retrieve old images
                const oldImages = await query("SELECT imgpath FROM roomimgs WHERE roomID = ?", [roomId]);

                // Delete old images from the file system
                oldImages.forEach(img => {
                    const filePath = path.join(__dirname, '../../uploads', img.imgpath);
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Failed to delete image file: ${filePath}`, err);
                        }
                    });
                });

                // Delete old images from the database
                await query("DELETE FROM roomimgs WHERE roomID = ?", [roomId]);

                // Bulk insert new images
                const files = req.files.map(file => ({
                    imgpath: file.filename,
                    roomID: roomId,
                }));

                await query("INSERT INTO roomimgs (imgpath, roomID) VALUES ?", [files.map(file => [file.imgpath, file.roomID])]);
            }

            res.status(200).json({ msg: "Room updated successfully!" });
        }
        catch (err) {
            res.status(500).json({ msg: "Server error", error: err });
        }
    }
);
//============= ENDPOINT DELETE ROOM ================//
router.delete("/delete/:id", async (req, res) => {
    try {
        const query = util.promisify(connection.query).bind(connection);
        const roomId = req.params.id;

        // Retrieve the room to check if it exists
        const existingRoom = await query("SELECT * FROM room WHERE id = ?", [roomId]);
        if (existingRoom.length === 0) {
            return res.status(404).json({ msg: "Room not found" });
        }

        // Retrieve images for the room
        const images = await query("SELECT imgpath FROM roomimgs WHERE roomID = ?", [roomId]);

        // Delete images from the file system
        images.forEach(img => {
            const filePath = path.join(__dirname, '../../uploads', img.imgpath);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Failed to delete image file: ${filePath}`, err);
                }
            });
        });

        // Delete images from the roomimgs table
        await query("DELETE FROM roomimgs WHERE roomID = ?", [roomId]);

        // Delete the room from the room table
        await query("DELETE FROM room WHERE id = ?", [roomId]);

        res.status(200).json({ msg: "Room and associated images deleted successfully!" });
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err });
    }
});
//============= ENDPOINT GET-ALL ROOM ================//
router.get("/rooms", async (req, res) => {
    try {
        const query = util.promisify(connection.query).bind(connection);

        // Query to get all rooms with their associated images
        const rooms = await query(`
            SELECT r.id, r.type, r.descreption, r.numOfRooms, i.imgpath 
            FROM room r
            LEFT JOIN roomimgs i ON r.id = i.roomID
        `);

        // Format the result to group images under their respective room
        const roomsMap = {};
        rooms.forEach(room => {
            if (!roomsMap[room.id]) {
                roomsMap[room.id] = {
                    id: room.id,
                    type: room.type,
                    descreption: room.descreption,
                    numOfRooms: room.numOfRooms,
                    images: []
                };
            }

            if (room.imgpath) {
                roomsMap[room.id].images.push(room.imgpath);
            }
        });

        // Convert the roomsMap to an array
        const formattedRooms = Object.values(roomsMap);

        res.status(200).json(formattedRooms);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error", error: err });
    }
});




    module.exports = router;    