const mongoose = require('mongoose');
 
const uri='mongodb+srv://harshini:harshini@grocery.vijolaf.mongodb.net/?retryWrites=true&w=majority'

const connectDB = ()=>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
module.exports = connectDB