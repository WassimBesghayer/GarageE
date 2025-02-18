const mongoose=require("mongoose");
const schema=mongoose.Schema;

const operatorSchema = new schema({
    nameOperator: String,
    CIN: Number,
    dateOfIssueCIN: String,
    phoneOperator: Number,
    emailOperator: String,
    specialtyOperator: String,
    startWork: Date,
    diploma: {String, default: none}
    // accountID: String → ask Fatma about it
    
});

const Operator = mongoose.model('Operator',operatorSchema);
module.exports=Customer;