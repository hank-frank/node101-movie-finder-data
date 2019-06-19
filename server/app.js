const express = require('express');
const morgan = require('morgan');
const axios = require('axios');


const app = express();

const holdingObj = {};

app.use(morgan('dev'));

//the get request to this /route is from OMDB which responds to corerectly phrased get requests with a .json object filled with the content of 
//a movies imdb data. Within this get request we will be working with the data from that request in the form of that .json formatted
//object, so it will be accessed as key/val pairs from an obj.
app.get('/', function(req, res){
    var keyAndVal = req.query; //req.query is pulling the full key/val pairs that are sent by OMDB, they're being stored in var keyAndVal
    var key = Object.keys(keyAndVal);
    var val = Object.values(keyAndVal);
    var url = 'http://www.omdbapi.com/?apikey=8730e0e&'  + key + '=' + encodeURI(val);
    
})



    //option 2
    //the get request to this /route is from OMDB which responds to corerectly phrased get ruquests with a .json object filled with the content of 
    //a movies imdb data. Within this get request we will be working with the data from that request in the form of that .json formatted
    //object, so it will be accessed as key/val pairs from an obj. 
    app.get('/', function(req, res){  // an app.get to anything after a / in the url (which will be all) with a function to be run upon 
        var movieId = req.query; //var movieID is a req.query that is openended, it is holding all the key/val pairs.  
        var key = Object.keys(movieId); //this is grabbing just the key from the kay/val pair from movieId's req.query which was holding both. 
        console.log(key);
        var value = Object.values(movieId); //this is grabbing just the val from the key/val pair stored in movieId. 
        console.log(value);
        var url = 'http://www.omdbapi.com/?apikey=8730e0e&'  + key + '=' + encodeURI(value); //this is constructing the url template into which 
        //the movies form the test can be inserted by concatinating it in a string with the vars above being those pieces. 
        //works because the url for OMDB is constructed from key/val pairs in a specific format. 
     
        if (cache.hasOwnProperty(value)){ //if the obj(cache) we created above is holding the value that is being requested:
            res.json(cache[value]); //respond with the .json format value from that object(cache) that we created above to hold this
            //exact info. 
        } else {                    //if it's not already in there:
            console.log(cache);    //making sure cache is avail and, is it holding info yet?
            axios.get(url)         //use axios to handle the get request to the url constructed above which will be holding the correct
            //values for each test that is passing in the info. 
            .then(response => { //following the get, .then is calling an annonymous funciton called response that is doing: 
            cache[value] =  response.data; //setting the value in the cache obj to the response.data content, which is the value half of the key/val pair stored
            // in the 
            res.send(response.data);  //sent that data(the value half of the key/val pair) back as the response to the whole req. 
            }).catch(err => res.json(err.message)); //if theres an error throw this. 
        }
     });
     
     
     
     //if and else statement goes below
     
     
     // When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter
     
     
     module.exports = app;

   
 

module.exports = app;