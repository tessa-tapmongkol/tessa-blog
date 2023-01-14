const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, (req, res) => {
    console.log("connected to database")
});

const app = express();

app.get("/travel-posts", (req, res) => {

})

app.get("/books-posts", (req, res) => {

})

app.listen(3000, () => {
    console.log("Listening to 3000");
});