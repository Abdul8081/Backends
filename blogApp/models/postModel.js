//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // it means chahiye hi chahiye
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});




//export, this is the syntax, learn it
module.exports = mongoose.model("Post", postSchema);