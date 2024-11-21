const mongoose = require("mongoose");
require('dotenv').config();
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected : ", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);              //termiante the process immediatly , 0 success , 1 fail
    }
}
module.exports = {connectDb};