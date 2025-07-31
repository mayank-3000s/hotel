const express = require('express');
const app = express();

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRouter = require('./routers/personRouter');
app.use('/',personRouter);

app.get('/', (req, res)=>{
    res.send("Welcome to my page Habibi....");
})

app.listen(3333,()=>{
    console.log("server is running on port 3333");    
});

