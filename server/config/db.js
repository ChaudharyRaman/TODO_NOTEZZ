// require('dotenv').config({path:__dirname+'/../.env'});
const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

mongoose.set('strictQuery', true);

const connectDB = async ()=>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MONGODB is connected");
    }catch(err){
        console.err(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;