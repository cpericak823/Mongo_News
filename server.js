// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var exprhbs = require("express-handlebars");
var bodyParser = require("body-parser");
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require('mongoose');
var path = require("path");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

//Require Routes
require("./routes/routes.js")(app);

//require handlebars
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Scrape the Website
//Making a request call for the new york times website. The page's HTML is saved as the callback's third argument
request("https://www.nytimes.com/", function(error, response, html) {

    //Load the HTML into cheerio and save it to a variable
    //'$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    //An empty array to save the data that we'll scrape
    var result = [];

    //With cheerio, find each h2 tag with the "story-heading" class
    //(i: iterator. element: the current element)
    $("h2.story-heading").each(function(i, element) {

        //Save the text of the element (this) in a "title" variable
        var title = $(this).text();

        // In the currently selected element, look at its child elements (i.e., its a-tags),then save the values for any "href" attributes that the child elements may have
        var link = $(element).children().attr("href");

        //Save these results in an object that we'll push into the result array we defined earlier
        result.push({
            title: title,
            link: link
        });

    });

    //Log the result once cheerio analyzes each of its selected elements
    console.log(result);

});

//Database configuration
//Initialize Mongoose
mongoose.connect('mongodb://localhost/my_database');

// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
