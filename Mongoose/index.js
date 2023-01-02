const express = require('express');
require("dotenv").config();
const app= express();
const router = require('./routes/products');
const connectDB = require('./db/connect')

app.get('/',(req,res)=>{
    res.send('hey, how you doin?')
})
app.use("/api/products",router)
const PORT = process.env.PORT || 8080
const start=async()=>{
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, ()=>{
        console.log('listening on port '+PORT);
    })
  } catch (error) {
    console.log(error)
  }
}

start();


