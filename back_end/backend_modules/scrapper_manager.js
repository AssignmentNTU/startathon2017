var fs = require('fs');
var request = require("request");
var cheerio = require('cheerio');
var url_google_scrap = "https://www.google.com.sg/webhp?ion=1&espv=2&ie=UTF-8#";
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

    request(url_to_scrap , function(error, response, html){
        if(!error){
            console.log("html",html);
        }
    })

}