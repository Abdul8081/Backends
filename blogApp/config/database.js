const mongoose = require("mongoose");

// importing all the env file configuration in the env file
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        // it means on getting the error, it will exit with error
        process.exit(1);
    } ) 
};

module.exports = connectWithDb;