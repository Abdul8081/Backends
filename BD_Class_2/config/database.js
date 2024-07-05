const mongoose = require('mongoose');

// isse jo bhi env file k ander likha hoga wo sara ka sara load ho jayega current file k ander
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,

    })
    .then( () => console.log("DB connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connections");
        console.log(error.message);
        // iska matlab kya hota hai ?
        process.exit(1);
        

    });
}
// backends k ander export karne ka salika
module.exports = dbConnect;