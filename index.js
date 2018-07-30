const express = require('express');
const app = express();
const config = require('./config/database');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect(config.uri,{ useNewUrlParser: true }, (err) => {
    if(err){
        console.log('Could not connect to database!', err);
    } 
    else{
        console.log('Connected to database ', config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

mongoose.promise = global.promise;
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(8080, () =>{
    console.log('Listening on port 8080');
});