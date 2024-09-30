const mysql = require("mysql"); // Use mysql2 for better support

const connection = mysql.createConnection({
    host: "localhost", // Change to 'localhost' if running locally
    user: "root",
    password: "",
    database: "camp-sys",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error("DATABASE CONNECTION ERROR:", err);
        return; // Avoid throwing an error to keep the app running
    }
    console.log("DATABASE IS CONNECTED");
});

module.exports = connection;
