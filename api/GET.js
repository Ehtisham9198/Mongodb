const connectdb = require('../database/connectdb');

const express = require('express');

const app = express();

app.get('/',async(req,res)=>
{   let data = await connectdb();
    data = await data.find().toArray();
    res.send(data)

})
app.listen(5000)