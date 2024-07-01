
//server instatiate 
const express = require('express');
const app = express();

// use to parse req.body in express, -> PUT, POST
const bodyParser = require('body-parser');
//specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());



//actiate the sever on 3000
app.listen(3000, () => {
    console.log("Server started at port 3000");
});

// Routes
app.get('/', (request, response) => {
    response.send("Hello jee, Testing ho rahi hai");
})

app.post('/api/cars',(request, response) => {
    const {name, brand} =  request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfullty");
})


// Post man
// use the post man to post an post data
/*
st1: click on the new button
st2: clik on the HTTP
st3: click to change the access type -> like get -> post
st4: past the url name like-> localhost:3000/api/cars
st5: click on the body,and select the option as the RAW
st6: Now put the content in this body
st7: finally click to send
st8: see at the terminal, is the putted data is coming or not
*/


// linking the node with the mongobd
// yah eik tarah ka promise hota hai
const mongoose = require('mongoose');
// syntax to connect the mongoose to the node js
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() =>{console.log("connection successful")})
.catch(() => {console.log("recieved an error")});