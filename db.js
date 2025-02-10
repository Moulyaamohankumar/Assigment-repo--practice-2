const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected");
    }
    catch(error)
{
    console.log("Database is not Connected");
}}
module.export = connectDB
