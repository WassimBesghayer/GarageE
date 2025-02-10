const mongoose = require("mongoose");
const schema = mongoose.Schema; 
const reservationSchema = new schema({
id_user:String,
full_name_user:String,
phone:String,
email:String,
carModel:String,
matricule:String,
pannes:Array,
date_reservation:String,
status:{type:String, default:"waiting"}
});
const Reservation=mongoose.model("Reservation", reservationSchema);
module.exports =Reservation
