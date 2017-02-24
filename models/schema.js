// Require mongoose
var mongoose = require("mongoose");
var db = require("../connection.js");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a new Schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    // password: a required, trimmed string that's 6 characters or longer
    link: {
        type: String,
        trim: true,
    }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Article;
