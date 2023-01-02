const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default: false
    },
    quantity:{
        type:Number
    }
})
module.exports= mongoose.model('Product', productSchema);