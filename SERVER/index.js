//================= init express app ===============
const express = require("express");
const app = express();
const path = require('path'); // Import the path module
require('dotenv').config();
const cors = require("cors");
//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
app.use(cors());  // allow https requst,respons


// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));
app.use('/server/uploads', express.static(path.join(__dirname, 'uploads')));

//======== run the app ============//
app.listen(4000 || process.env.port, () => {
        console.log(`SERVER IS RUNNING ON PORT 4000....`);
    });

//=========== APIS ===========//
//====== AUTHINTICATION ======//
app.use("/Auth",require("./routes/Auth/Auth"));
//=========== OFFERS =========//
app.use("/offers",require("./routes/offers/offers"));
