var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var item_schema = new Schema({
    item_id :  Number,
    item_name : String,
    item_Calorie : String,
    unit: String,
    amount: Number
});

var calories_list = {
    "chicken": "400 kal/ 100 gr",
    "butter": "100 kal/ 100 gr",
    "cheese": "150 kal/ 100 gr"
};

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
    console.log("conection",mongoose.connection.readyState);
    item = mongoose.model('item', item_schema);
}

function list_item(res){
// get all the users
    item = mongoose.model('item', item_schema);
    item.find({}, function (err, items) {
        console.log("items", items);
        console.log("err", err);
        if (err) throw err;
        return res.json({data: items});
    });

}

function add_item(json_data){
   console.log("conection",mongoose.connection.readyState);

    item = mongoose.model('item', item_schema);
    var json_data = {
      "item_id":1,
        "item_name" : "edward",
        "item_calories": 100,
        "unit":"gr",
        "amount":100
    };
    //get item cals
    var item_name = json_data["item_name"];
    var calories = calories_list[item_name];

    // var calories = 10;
    var item_save =  new item({
            item_id: json_data['item_id'],
            item_name: json_data['item_name'],
            item_calorie: calories,
            unit: json_data['unit'],
            amount: json_data['amount']
        });
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
