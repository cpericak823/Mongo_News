var mongoose = require('mongoose');

//Initialize Mongoose
mongoose.connect('mongodb://heroku_64sscx3h:qh8rhkjbg37oar7m02n2l58eb@ds157509.mlab.com:57509/heroku_64sscx3h');
// Save our mongoose connection to db
var db = mongoose.connection;

// If there's a mongoose error, log it to console
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once we "open" a connection to mongoose, tell the console we're in
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
module.exports = db;
