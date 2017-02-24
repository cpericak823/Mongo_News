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

    app.post("/", function(req, res) {
        var newsInfo = new Schema(req.body);
        newsInfo.save(function(error, doc) {
            if (error) {
                res.send(error);
            }
            // Otherwise, render the handlebars page
            else {
                console.log(newsInfo);
                res.redirect("/articles");
            }
        });
    });

    // 2. At the "/articles" path, display every entry in the collection
    app.get("/articles", function(req, res) {
        // Query: In our database, go to the news collection, then "find" everything
        Article.find({}).then(function(news_articles) {
            console.log(news_articles);
            res.render("index", { index: news_articles });
        }).catch(function(error) {
            console.log(error);
        });
    });

};
