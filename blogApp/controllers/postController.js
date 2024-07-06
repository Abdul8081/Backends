//importing Post from the postModel
const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{    
            // data fetch
            const {title, body} = req.body;
            // object maded
            const post = new Post({
                title,body,
            });
            // data saved
            const savedPost = await post.save();

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};


//need some more testing after completing like wala controleer
exports.getAllPosts = async (req,res) => {
    try {
        // like wale array ko aur comment wale array ko add kar rahe hai directly 
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}