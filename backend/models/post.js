const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    images: [{ data: Buffer, contentType: String, required: false }],
    type: { type: String, required: true }
});

module.exports = mongoose.model("post", Post);