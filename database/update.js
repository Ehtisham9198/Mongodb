const dbConnect = require('./connectdb');

const update = async()=>{
    let data = await dbConnect();
    data.updateOne(
        {name:"Nikhil"},{
        $set:{name:"Rajpoot"}}
    )

}
update();