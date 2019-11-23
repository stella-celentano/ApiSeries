const mongoose = require("mongoose");

const dbSerie = "mongodb+srv://stella:stella2019@cluster0-cmbag.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbSerie, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
    console.log("Error connect DB", error)
});
db.once("open", () => {
    console.log("Success connect DB")
});
