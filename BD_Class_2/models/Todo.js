const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        descryption: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt: {
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt: {
            type:Date,
            required:true,
            default:Date.now(),
        },
    }
);
// iskp Todo k name se send kar diya
module.exports = mongoose.model("Todo", todoSchema);