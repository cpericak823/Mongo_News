//Require Dependencies
var path = require("path");
var db = require("../connection.js");
var schema = require("../models/schema.js");
var news_articles = require("../scraper.js");


// Routes
// 1. At the root path, render a landing page
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/landing_page/landing_page.html"));
    });


    // 2. At the "/articles" path, display every entry in the collection
    app.get("/articles", function(req, res) {
        // Query: In our database, go to the news collection, then "find" everything
        schema.find({}).then(function(newsList) {
            res.render("articles", { articles: newsList });
        }).catch(function(error) {
            console.log(error);
        });
    });

    // 2. At the "/articles" path, display every entry in the collection
    app.get("/savedarticles", function(req, res) {
        // Query: In our database, go to the news collection, then "find" everything
        schema.find({}).then(function(myArticles) {
            res.render("savedArticles", { savedArticles: myArticles });
        }).catch(function(error) {
            console.log(error);
        });
    });


    app.post("/", function(req, res) {

    });


};
