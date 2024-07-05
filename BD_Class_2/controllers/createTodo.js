//import the models
const status = require("statuses");
const Todo = require("../models/Todo");
// yaha prr eik route handler likha jata hai


// this is the new way of export the data, 
// neeche module.exort kar k bhi export kar sakte hai
exports.createTodo = async(req, res) => {
    //here async function is created due to not break
    //the flow, if something is requested
    try{
        //extract the title and description from the request body
        const {title, description} = req.body;
        //create a new Todo Obf and insert in DB
        const response = await Todo.create({title, description});
        //send a json response with a success flag 
        res.status(200).json(
            {
                succes:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}