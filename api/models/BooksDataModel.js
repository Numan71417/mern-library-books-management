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
    }

    

}, {timestamps : true} )

const booksDataModel = mongoose.model('book', bookSchema);


module.exports = booksDataModel;