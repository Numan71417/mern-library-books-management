const mongoose = require("mongoose");
;

//  schema design
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "username required"],
        unique : true
    },

    email : {
        type : String,
        required : [true , "Email is required"],
        unique : true
    },

    password : {
        type : String,
        required : [true , "password is required"]
    }

}, {timestamps : true} )

const userModel = mongoose.model('user', userSchema);


module.exports = userModel;