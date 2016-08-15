// city-light route for Downtown Rochester feed

var express = require('express');
var router = express.Router();

var request = require("request");

var url = "http://www.downtownrochestermn.com/_feeds/list_events_json.pxp";

var display = {};

router.get('/', function(req, res) {
  var data = {};
  var feed = [];
  var singleItem = {};
  // console.log('HELLO!')
  // response.send('This isn\'t a total failure yet!');
  
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      feed = data.item;
      singleItem = feed[0];
      // display = JSON.parse(body);
      // console.log('here is singleItem: ', singleItem); // Show the HTML for the Google homepage.
      res.send(feed);
    }
  });
});


module.exports = router;

/*


function httpGetAsync(url, callback)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            // var data = JSON.stryingify(xmlHttp.responseText);
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
    // return xmlHttp.responseText;
}



// Lets configure and request
request({
    url: url, //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET',
    //Lets post the following key/values as form
    json: {
        field1: 'data',
        field2: 'data'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        // var data = JSON.stringify(body);
        console.log(response.statusCode, body);
        
}
});


request('http://www.modulus.io', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
});

*/