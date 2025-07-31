const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotel';

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