var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var scrapper_manager_lib = require('./scrapper_manager');


var item_schema = new Schema({
    item_id :  Number,
    item_name : String,
    item_Calorie : Number,
    unit: String,
    amount: Number
});

var item;


module.exports = {
    'init_mongo': function(){
        init();
    },
    'add_item': function(json_data){
        add_item(json_data);
    },
    'list_item': function(response){
        return list_item(response);
    },
    'search_by_name': function(name_by_search){
        search_by_name(name_by_search);
    }
};


function init(){
    mongoose.connect('mongodb://localhost/mydb');
    item = mongoose.model('item', item_schema);
}

function list_item(res){
// get all the users
    item = mongoose.model('item', item_schema);
    if(item != null) {
        item.find({}, function (err, items) {
            console.log("items", items);
            console.log("err", err);
            if (err) throw err;
            return res.json({data: items});
        });
    }else{
        return res.json({data: "Fails"});
    }
}

function add_item(json_data){
    item = mongoose.model('item', item_schema);

    //get item cals
    var item_name = json_data["item_name"];
    // var calories = scrapper_manager_lib.start_scrapping(item_name);

    var calories = 10;
    var item_save =  new item(
        {
            item_id: json_data['item_id'],
            item_name: json_data['item_name'],
            item_calorie: calories,
            unit: json_data['unit'],
            amount: json_data['amount']
        }
    );
    item_save.save(function(err, success){
        return true;
    });
}


function search_by_name(name_to_search){
    item = mongoose.model('item', item_schema);

    item.find({
        "item_name" : { "$regex": name_to_search , $options: "i"}
    }, function(err, docs){
        return docs;
    });
}
