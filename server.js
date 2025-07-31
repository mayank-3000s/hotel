const express = require('express');
const app = express();

const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRouter = require('./routers/personRouter');
app.use('/',personRouter);

app.get('/', (req, res)=>{
    res.send("Welcome to my page Habibi....");
})

const port = process.env.PORT || 3333;

app.listen(port,()=>{
    console.log("server is running on port 3333");    
});