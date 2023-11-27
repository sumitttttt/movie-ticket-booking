const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected' , ()=> {
    console.log('mongodb connection successful');
})

connection.on('erroe' , (err)=> {
    console.log('mongodb connection failed');
})