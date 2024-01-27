const mongoose = require('mongoose');
const url = 'mongodb+srv://b522035:4esZ2bnr1wdlyypE@cluster0.k52xotb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);

const dbSchema = new mongoose.Schema(
    {
        name:String,
        ID : String,
    }
);

const main = async()=>{
    const product = mongoose.model('product',dbSchema);
    let data = new product({name:"Ehtisham",ID: "B522035"});
    const result = await data.save();

}
main()
const update =async()=>{
    const product = mongoose.model('product',dbSchema);
    let data=await product.updateOne(
        {name:"Ehtisham"},
        {$set:{name:"I am axpert in javascript"}});
}
// update();

const Delete= async()=>{
    const product = mongoose.model('product',dbSchema);
    let data = await product.deleteOne({name:"I am axpert in javascript"});
}
// Delete();
