const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require(`../../db/dbconnection`);
const util = require('util');
const upload = require(`../../middleware/upload`);
const fs = require('fs');
const path = require('path');

//============= ENDPOINT CREATE OFFER ================//
router.post(
    "/create",
    upload.array("offersImgs"),
    
    // Validation middleware
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('descreption').notEmpty().withMessage('Description is required'),
      body('discount').isFloat({ min: 0 }).withMessage('Discount must be a positive number'),
    ],
  
    async (req, res) => {
      const query = util.promisify(connection.query).bind(connection);
  
      // Handle validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { title, descreption, discount } = req.body;
  
      try {
        // CREATE OBJECT OF OFFERS TO ACCESS DATABASE
        const offerObj = {
          offerName: title,
          offerDescreption: descreption,
          offerDiscount: discount,
        };
  
        const insertedOffer = await query("INSERT INTO offers SET ?", offerObj);
        const insertedOfferId = insertedOffer.insertId;
  
        // Validate files (same logic as before)
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
          offerid: insertedOfferId,
        }));
  
        await query("INSERT INTO offerimgs (imgpath, offerid) VALUES ?", [files.map(file => [file.imgpath, file.offerid])]);
  
        res.status(200).json({ msg: "Offer created successfully!" });
      } 
      catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error", error: err });
      }
    }
  );

//============= ENDPOINT UPDATE OFFER ================//
router.put(
    "/update/:id",
    upload.array("offersImgs"), // For updating images if provided
    [
      body('title').optional().notEmpty().withMessage('Title cannot be empty'),
      body('descreption').optional().notEmpty().withMessage('Description cannot be empty'),
      body('discount').optional().isFloat({ min: 0 }).withMessage('Discount must be a positive number'),
    ],
    async (req, res) => {
      const query = util.promisify(connection.query).bind(connection);
      const offerId = req.params.id;
  
      // Handle validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // Retrieve existing offer
        const existingOffer = await query("SELECT * FROM offers WHERE id = ?", [offerId]);
        if (existingOffer.length === 0) {
          return res.status(404).json({ msg: "Offer not found" });
        }
  
        const { title, descreption, discount } = req.body;
  
        // Build the updated offer object, keeping old values if not provided
        const updatedOffer = {
          offerName: title || existingOffer[0].offerName,
          offerDescreption: descreption || existingOffer[0].offerDescreption,
          offerDiscount: discount !== undefined ? discount : existingOffer[0].offerDiscount,
        };
  
        // Update offer in the database
        await query("UPDATE offers SET ? WHERE id = ?", [updatedOffer, offerId]);
  
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
  
          // Retrieve old image paths from the database
          const oldImages = await query("SELECT imgpath FROM offerimgs WHERE offerid = ?", [offerId]);
  
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
          await query("DELETE FROM offerimgs WHERE offerid = ?", [offerId]);
  
          // Bulk insert new image paths into the database
          const files = req.files.map(file => ({
            imgpath: file.filename,
            offerid: offerId,
          }));
  
          await query("INSERT INTO offerimgs (imgpath, offerid) VALUES ?", [files.map(file => [file.imgpath, file.offerid])]);
        }
  
        res.status(200).json({ msg: "Offer updated successfully!" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error", error: err });
      }
    }
  );


  //============= ENDPOINT DELETE OFFER ================//
router.delete("/delete/:id", async (req, res) => {
    const query = util.promisify(connection.query).bind(connection);
    const offerId = req.params.id;
  
    try {
      // Retrieve old image paths from the database
      const oldImages = await query("SELECT imgpath FROM offerimgs WHERE offerid = ?", [offerId]);
  
      // Delete old images from the file system
      oldImages.forEach(img => {
        const filePath = path.join(__dirname, '../../uploads', img.imgpath);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Failed to delete image file: ${filePath}`, err);
          } else {
            console.log(`Successfully deleted image file: ${filePath}`);
          }
        });
      });
  
      // Delete old images from the database
      await query("DELETE FROM offerimgs WHERE offerid = ?", [offerId]);
  
      // Delete the offer from the database
      const result = await query("DELETE FROM offers WHERE id = ?", [offerId]);
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: "Offer not found" });
      }
  
      res.status(200).json({ msg: "Offer deleted successfully!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error", error: err });
    }
  });

  
//============= ENDPOINT GET ALL OFFERS WITH IMAGES ================//
router.get("/offers", async (req, res) => {
    const query = util.promisify(connection.query).bind(connection);
  
    try {
      // Query to get all offers and their associated images
      const offers = await query(`
        SELECT o.id, o.offerName, o.offerDescreption, o.offerDiscount, oi.imgpath
        FROM offers o
        LEFT JOIN offerimgs oi ON o.id = oi.offerid
      `);
  
      // Grouping offers with their images
      const groupedOffers = offers.reduce((acc, offer) => {
        const { id, offerName, offerDescreption, offerDiscount, imgpath } = offer;
  
        // If the offer does not exist in the accumulator, create it
        if (!acc[id]) {
          acc[id] = {
            id,
            offerName,
            offerDescreption,
            offerDiscount,
            images: []
          };
        }
  
        // If imgpath exists, push it to the images array
        if (imgpath) {
          acc[id].images.push(imgpath);
        }
  
        return acc;
      }, {});
  
      // Convert the grouped object back to an array
      const result = Object.values(groupedOffers);
  
      // If no offers are found, return an appropriate message
      if (result.length === 0) {
        return res.status(404).json({ msg: "No offers found" });
      }
  
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Server error", error: err });
    }
  });
  

  module.exports = router;