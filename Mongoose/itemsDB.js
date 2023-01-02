require('dotenv').config();
const connect = require('./db/connect');
const itemModel= require('./models/product');
const itemJson = require('./items.json')


const start= async()=>{
    try {
        await connect(process.env.MONGO_URL);
        console.log('connected');
        console.log(itemJson);
        await itemModel.create(itemJson)
        console.log('success');
    } catch (error) {
        console.log(error);
    }
}
start();