const mongoose = require("mongoose");
const schema = mongoose.Schema; 
const itemSchema = new schema ({

    item_id: String,
    item_title: String,
    item_category: String,
    unit_price: Number,
    tax: Number,
    stocking_date:String,
    status:{type:String, default:"available"}
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item
