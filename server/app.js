const express = require('express');
const morgan = require('morgan');
const axios = require('axios');


const app = express();

const holdingObj = {};

app.use(morgan('dev'));

//the get request to this /route is from OMDB which responds to corerectly phrased get requests with a .json object filled with the content of 
//a movies imdb data. Within this get request we will be working with the data from that request in the form of that .json formatted
//object, so it will be accessed as key/val pairs from an obj.
//We're doing an if else below because we want to not have to ping the OMDB server every time if we're going to be requestig the
//same info repeatedly. We're storing it in an obj of our own after requesting it so that we can request it from ourselves next time. 
app.get('/', function(req, res){
    var keyAndVal = req.query; //req.query is pulling the full key/val pairs that are sent by OMDB, they're being stored in var keyAndVal
    var key = Object.keys(keyAndVal); //taking just the key
    var val = Object.values(keyAndVal); //taking just the value
    var url = 'http://www.omdbapi.com/?apikey=8730e0e&'  + key + '=' + encodeURI(val); //concat constructing the url with the key and value 
    //pairs correctly taking their place in the url. 
    //works because the url for an OMDB request is constructed from key/val pairs in a specific format, this format.  

    if (holdingObj.hasOwnProperty(val)){ //if the holdingObj we created above is holding the value that is being requested:
        res.json(holdingObj[val]);//respond with the .json format value from that holding object that we created above to hold this
        //exact info. 
    } else {
        console.log(holdingObj);    //making sure cache is avail and, is it holding info yet?
        axios.get(url)         //use axios to handle the get request to the url constructed above which will be holding the correct
        //values for each test that is passing in the info. 
            .then(response => { //following the get, .then is calling an annonymous funciton called response that is doing: 
            holdingObj[val] =  response.data; //setting the value in the holdingObj obj to the response.data content, which is the value half of the key/val pair stored
            // in the object
            res.send(holdingObj[val]);  //sent that data(the value half of the key/val pair) back as the response to the whole req. 
            }).catch(err => res.json(err.message)); //if theres an error throw this.
    }//closing else

}) //closing full app.get

module.exports = app;