const express = require("express"); //import express
const app = express(); //app will user express
const PORT = 6969; //set the port

//defining the routes
//require the needed pages - in the user file and comment file, they must be exported using module.exports= router   !!!
const userRoute = require('./routes/User');
const commentsRoute = require('./routes/Comments');

//actually use the routes
app.use('/user', userRoute);
app.use('/comments', userRoute);

//will actively listen if the server is running, and will send a message if so
app.listen(PORT, () => {
    console.log("Server is running.");
});