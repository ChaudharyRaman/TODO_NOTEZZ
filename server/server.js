require('dotenv').config({path:__dirname+'/.env'});
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');

// app.use(express.json({extended:false}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// routes
const todo = require('./routes/todo')
connectDB();

// initialize middleware

app.get('/',(req,res)=>{
    res.send("Server Running");
});

// USE ROUTES
app.use('/api/todo',todo);

app.listen(3001,()=>{
    console.log("backend running on port 3001");
})