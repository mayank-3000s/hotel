//mayank22 hotel
//mongodb+srv://hotel:<db_password>@cluster0.sgd1jfq.mongodb.net/


const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = 'mongodb://127.0.0.1:27017/hotel';
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("database is connected");    
})

db.on('error',()=>{
    console.log("error connecting database");    
})

db.on('disconnected',()=>{
    console.log("database is disconnected");    
})

module.exports = db;