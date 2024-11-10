const express = require('express');
const app = express();

//to require the package to the app.js
const dotenv = require('dotenv');

//require this to include full path of a folder, it is already exsisting module in node
const path = require('path');
const nodemon = require('nodemon');

const connectDatabase = require('./config/connectDatabase');
//to include the path to environment variable config
dotenv.config({path: path.join(__dirname,'config','config.env')})

const products = require('./routes/product');
const orders =  require('./routes/order');

connectDatabase();

app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT,() =>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});
