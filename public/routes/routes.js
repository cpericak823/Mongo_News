// Routes
// 1. At the root path, render a landing page
app.get("/", function(req, res) {
    // res.render(landing page);
});

// 2. At the "/all" path, display every entry in the animals collection
app.get("/all", function(req, res) {
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
