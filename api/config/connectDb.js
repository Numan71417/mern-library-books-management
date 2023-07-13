const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log(`server running on: ${mongoose.connection.host}`);
    } catch (e) {
        console.log(" error: ", e );
    }
}

module.exports = connectDb;