const express = require('express');
const okay = require('./Schema_Model');
require('./connect');
const app = express();

app.use(express.json());

app.post('/create',async(req,res)=>
{
    let data = new okay(req.body);
    let result = await data.save();
    res.send(result);
});

app.listen(5000);