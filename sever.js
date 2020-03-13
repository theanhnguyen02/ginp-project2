const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const md5 = require('md5');
const dotenv = require('dotenv');
dotenv.config()
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    },
    (err) => {
        if (err) console.log(err)
        else console.log("Connect to DB Success!");
    });
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.listen(8787, (err) => {
    if (err) console.log(err)
    else console.log('Connected Sever');
});