const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    pass : {
        type : String,
        required : true,
        unique : true
    },
    cpass : {
        type : String ,
        required : true ,
    }
})

const signupdata = new mongoose.model("signupdata" ,signupSchema );

module.exports = signupdata;