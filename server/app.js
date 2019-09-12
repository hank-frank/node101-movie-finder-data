const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

const holdingObj = {};

app.use(morgan('dev'));

app.get('/', function(req, res){
    var keyAndVal = req.query; 
    var key = Object.keys(keyAndVal); 
    var val = Object.values(keyAndVal); 
    var url = 'http://www.omdbapi.com/?apikey=8730e0e&'  + key + '=' + encodeURI(val); 
    if (holdingObj.hasOwnProperty(val)){ 
        res.json(holdingObj[val]);
    } else {
        axios.get(url) 
            .then(response => { 
            holdingObj[val] =  response.data; 
            res.send(holdingObj[val]); 
            }).catch(err => res.json(err.message));
    }
})

module.exports = app;
