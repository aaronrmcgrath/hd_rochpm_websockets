// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html


$(function() {

  // keep a queue in case we get overloaded with tweets from a popular twitter search
  var queue = [];
  var events = [];

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  console.log(date);

  // Listen for new tweets pushed from the server
  /*
  var socket = io();
  socket.on('twitter', function(tweet){
    queue.push(tweet);
  });

  // seed the first tweet
  $.get('/tweets', function(tweet) {
      displayTwitter(tweet.text);
  });
  */

  $.get('/city-lights', function(req, res) {
      events = res;
      console.log('In Client, here is res: ', res);
  });
});

var displayTwitter = function(tweet){
  $(".ticker").append('<div class="ticker_item">' + tweet + '</div>');
}
