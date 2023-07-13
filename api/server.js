const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

//  other packages 
const cors = require("cors");
const morgan = require("morgan");

// config .env file  always keep .env above all since using variables from it
dotenv.config();

// rest object 
const app = express();

// setting port by calling dotenv
const port =  process.env.PORT || 8080 

//  database calling
connectDb();

// middle wares 
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes 
app.use('/api/v1/users' , require('./routes/userRoutes'))



app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})