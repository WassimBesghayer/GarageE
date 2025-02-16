const mongoose = require("mongoose");
const schema = mongoose.Schema; 
const orderSchema = new schema({
id_user:String,
full_name_user:String,
phone: String,
email: String,
items: String,
unit_price: Number,
total_price: Number,
tax: Number,
purchase_date:String,
// status:{type:String, default:"preparing order"}
});
const Order=mongoose.model("Order", orderSchema);
module.exports =Order
