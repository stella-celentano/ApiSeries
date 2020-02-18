const mongoose = require("mongoose");
require('dotenv').config()

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Success connect DB ${process.env.DB_NAME}`))
    .catch(error => {
        console.log(`Error connect DB, ${error.message}`);
    });