var express = require('express');
var app = express();
var body_parser = require('body-parser');
var port = 8008;
var item_manager_lib = require('./backend_modules/item_manager');


function init_all_lib(){
    item_manager_lib.init_mongo();
}

init_all_lib();


//ALl router


app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
var router = express.Router();
// DEFINE ALL YOUR ROUTER HERE
router.get('/', function(req, res) {
    console.log("Receive request api");
    res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/list_item', function(req, res){
    list_item =  item_manager_lib.list_item(res);
});

router.post('/add_item', function(req, res){
    item_manager_lib.add_item(req.body);
    res.json({'success': true});
});

router.get('/search', function(req, res){

});


app.use('/api', router);
app.listen( 8008, '0.0.0.0');
console.log('Listen To Port ' + port);
