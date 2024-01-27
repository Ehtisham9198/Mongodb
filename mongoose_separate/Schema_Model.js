const mongoose = require('mongoose');

const DefineShema = new mongoose.Schema(
    {
        name:String,
        ID:String,
        Contact:Number
    }
);

module.exports = mongoose.model('okay',DefineShema);