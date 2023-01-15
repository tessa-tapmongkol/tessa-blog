const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const jsonParser = bodyParser.json();

const Post = require("./models/post");

require("dotenv").config();

app.get("/posts", async(req, res) => {
    try {
        let posts = await Post.find({});
        res.status(200).json(posts);
    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
})

app.post("/create_post", jsonParser, async(req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.send(newPost);
    } catch(error) {
        res.send({ message : error})
    }
})

mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (req, res) => {
    console.log("Connected to database")
});

app.listen(process.env.PORT, () => {
    console.log("Listening to 3000");
});
