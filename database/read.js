const dbConnect = require('./connectdb');

const readData=async()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);

}
readData();