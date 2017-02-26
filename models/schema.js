// Require mongoose
var mongoose = require("mongoose");
var db = require("../connection.js");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a new Schema with a title and link documents
var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    link: {
        type: String,
        trim: true,
    },
    saved: Boolean,
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Article;
