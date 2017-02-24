//Scrape the Website
var request = require("request");
var cheerio = require("cheerio");
var schema = require("./models/schema.js");

//Making a request call for the new york times website. The page's HTML is saved as the callback's third argument
module.exports = function(app) {
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
            var title = $(this).text().trim();

            // In the currently selected element, look at its child elements (i.e., its a-tags),then save the values for any "href" attributes that the child elements may have
            var link = $(element).children().attr("href");

            //Save these results in an object that we'll push into the result array we defined earlier
            if (title === undefined || title === "") {
                result.push({
                    title: "Missing Title",
                    link: link
                });

            } else if (link === undefined || link === "") {
                result.push({
                    title: title,
                    link: "Missing Link"
                });
            } else {
                result.push({
                    title: title,
                    link: link
                });
            }
        });

        //save the array
        var newsInfo = new Article(result);
        ArticleSchema.save(function(err) {
            if (err) {
                return handleError(err);
            } else {
                console.log(newsInfo);
            }
        });


        //Log the result once cheerio analyzes each of its selected elements
        console.log(result.slice(0, 21));

    });
};
