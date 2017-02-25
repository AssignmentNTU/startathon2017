
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
    }
};


function init(){
    mongoose.connect('mongodb://localhost/mydb');
}

function list_item(){

}

function add_item(json_data){
    var item_save =  new item_schema(
        {
            item_id: json_data['id'],
            item_name: json_data['item_name'],
            item_calorie: json_data['item_calorie'],

        }
    )
}

function get_manager(){

}
