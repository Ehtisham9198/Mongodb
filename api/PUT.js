const express = require('express');
const connectdb = require('../database/connectdb');
const app = express();

app.use(express.json());

app.put('/',async(req,res)=>{
    let data = await connectdb();
    let result = data.updateOne(
        {name:'Rudauli'}, //req.body.name->'Rudauli
        {$set:req.body}
    )
    res.send({result:'update'});

})

app.listen(5000);
