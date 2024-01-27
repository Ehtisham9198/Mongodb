const connectdb = require('./connectdb');


const Delete = async()=>{
    const data =  await connectdb();
    data.deleteOne({name:"MOHD"})
};

Delete();