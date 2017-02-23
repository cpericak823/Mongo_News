//Require Dependencies
var path = require("path");

// Routes
// 1. At the root path, render a landing page
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/landing_page/landing_page.html"));
    });

    // 2. At the "/articles" path, display every entry in the collection
    app.get("/articles", function(req, res) {
        // Query: In our database, go to the animals collection, then "find" everything
        db.articles.find({}, function(error, found) {
            // Log any errors if the server encounters one
            if (error) {
                console.log(error);
            }
            // Otherwise, send the result of this query to the browser
            else {
                console.log(found);
            }
        }).then(function(news) {
            res.render("index", { index: news });
        });
    });

};
