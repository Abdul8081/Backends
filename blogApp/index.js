
// express instance lata hai, aur server create
const express = require("express");
const app = express();

//this is for the loding the configuration
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware, linking the app with the json
app.use(express.json());

const blog = require("./routes/blog")
//mount -> extra addition
//then it's mapped with this
app.use("/api/v1", blog);

// this is for the connection with the database
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    // inside this, we have to use the backtick symbol
    console.log(`App is started at Port no ${PORT}`);
})

// default route
app.get("/", (req,res) => {
    // in this that is the backtick used
    res.send(`<h1>This is my HomePage baby</h1>`)
})