//================= init express app ===============
const express = require("express");
const app = express();

//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());  // allow https requst,respons



//======== run the app ============//
app.listen(4000 || process.env.port, () => {
        console.log(`SERVER IS RUNNING ON PORT 4000....`);
    });

//=========== APIS ===========//
app.use("/Auth",require("./routes/Auth/Auth"));