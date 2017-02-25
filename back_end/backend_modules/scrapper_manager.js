var fs = require('fs');
const request = require("request");
var cheerio = require('cheerio');
var url_google_scrap = "https://www.google.com.sg/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#";
// Load jsdom, and create a window.
var queryString = require('query-string');


module.exports = {
    'start_scrapping': function(data){
        start_scrapping(data);
    }
};

function start_scrapping(data){
    var data = {"q":data+" calorie"};
    var url_to_scrap = url_google_scrap+queryString.stringify(data)+"&*";
    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            // We'll use the unique header class as a starting point.

            $('.header').filter(function(){

                // Let's store the data we filter into a variable so we can easily see what's going on.

                var data = $(this);

                // In examining the DOM we notice that the title rests within the first child element of the header tag.
                // Utilizing jQuery we can easily navigate and get the text by writing the following code:

                title = data.children().first().text();

                // Once we have our title, we'll store it to the our json object.

                json.title = title;
            })
        }
    })


}