const mongoose = require("mongoose");

const schema = mongoose.Schema
// books data schema design
const bookSchema = new schema({
    serialno : {
        type : String,
        required : [true , "Serial number required"],
    },

    name : {
        type : String,
        required : [true , "book name required"],
    },

    author : {
        type : String,
    },

    dateOfIssue : {
        type : String,
        required : [true , "required"]
    },

    dateOfReturn : {
        type : String,
        required : [true , "required"]
    }

}, {timestamps : true} )

const booksDataModel = mongoose.model('book', bookSchema);


module.exports = booksDataModel;