const dbConnect =  require('./connectdb');

const Insert= async()=>{
    const data = await dbConnect();
    await data.insertMany([
        {name:"MOHD"},
        {name:"Nikhil"},
        {name:"OK"},
    ]);
}

Insert();