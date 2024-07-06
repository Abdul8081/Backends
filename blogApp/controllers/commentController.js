//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic 
// yaha prr ye sara function asyn hota hai, kyoki it uses the things from the database
exports.createComment = async (req, res) => {
    try{
        //fetch data from req body 
        const {post, user, body} = req.body;
        //create a comment obje ct
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID, add the new commnet to its comments array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  ) 
                            .populate("comments") //populate the comments array with comment documents
                            .exec(); //isse exetution is done
                        // yaha prr agar data base k under keval id bhejna chahte hai to , hmme .populate("comment") aur .exec(); ko comment karna padega
                        //aur agr use kar rahe hai to, database me sara ka sara content jayega
        // new true, se updated pist aayega.
        // post. se find the id, 
        // $push -> isse comment array me push kiya ja raha hai

        res.json({
            post: udpatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
};