const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, (req, res) => {
    console.log("connected to database")
});

const app = express();

app.get("/travel-posts", (req, res) => {
    console.log("travel posts here")
})

app.get("/books-posts", (req, res) => {
    console.log("book posts here")
})

app.listen(3000, () => {
    console.log("Listening to 3000");
});