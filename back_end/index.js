var express = require('express');
var app = express();
var body_parser = require('body-parser');
var port = 8008;


app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());


var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
