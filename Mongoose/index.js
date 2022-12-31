const express = require('express');

const app= express();
const router = require('./routes/products');
const connectDB = require('./db/connect')

app.get('/',(req,res)=>{
    res.send('hey, how you doin?')
})

app.use("/api/products",router)

connectDB().then(()=>{
    console.log('connected to database')
})
const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log('listening on port '+PORT);
})