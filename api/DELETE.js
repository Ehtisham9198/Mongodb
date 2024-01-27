const express = require('express');
const connectdb = require('../database/connectdb');
const app = express();


app.use(express.json());

app.delete('/',async(req,res)=>{
    let data = await connectdb();
    let result = await data.deleteMany({name:req.body.name});
    data.send('DONE');
})

app.listen(5000);