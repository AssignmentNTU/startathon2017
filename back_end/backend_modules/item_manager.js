
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item_schema = new Schema({
    item_id :  Number,
    item_name : String,
    item_Calorie : Number,
    item_picture: String,
    unit: String,
    amount: Number
});


var item = mongoose.model('item', item_schema);

module.exports = {
    'init_mongo': function(){
        init();
    },
    'add_item': function(json_data){
        add_item(json_data);
    },
    'list_item': function(){
        return list_item();
    }
};


function init(){
    mongoose.connect('mongodb://localhost/mydb');
}

function list_item(){
// get all the users
    item.find({}, function(err, items) {
        if (err) throw err;
        return items;
    });
}

function add_item(json_data){
    var item_save =  new item_schema(
        {
            item_id: json_data['id'],
            item_name: json_data['item_name'],
            item_calorie: json_data['item_calorie'],
            item_picture: json_data['item_picture'],
            unit: json_data['unit'],
            amount: json_data['amount']
        }
    );
    item_save.save();
    return true;
}

function get_manager(){

}
