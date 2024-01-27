const express = require('express');
const connectdb = require('../database/connectdb');
const app = express();

app.use(express.json());

app.post('/',async (req,res)=>{
    let data = await connectdb();
    let result = await data.insertMany(req.body)
    res.send(result);


});

app.listen(5000);