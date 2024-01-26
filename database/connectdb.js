const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://b522035:NJzta8W7EtHnVxI3@cluster0.sht3frg.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const databaseName = 'Students';

const dbConnect=async()=>{
    let result = await client.connect();
    let db =result.db(databaseName);
    return db.collection('CE');
}

module.exports = dbConnect;
