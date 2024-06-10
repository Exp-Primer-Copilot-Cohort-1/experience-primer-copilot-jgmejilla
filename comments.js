// Create web server
// npm install express
// npm install body-parser

// Load express and body-parser
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Create express app
var app = express();

// Use body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Create a route to handle GET requests
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Create a route to handle POST requests
app.post('/comments', function (req, res) {
  // Get the data from the request
  var comment = req.body.comment;

  // Load the comments from the file
  fs.readFile('comments.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    // Parse the JSON data
    var comments = JSON.parse(data);

    // Add the new comment
    comments.push(comment);

    // Save the comments back to the file
    fs.writeFile('comments.txt', JSON.stringify(comments), function (err) {
      if (err) {
        console.log(err);
        return;
      }

      // Send a response
      res.send('Comment added');
    });
  });
});

// Start the server
app.listen(3000, function () {
  console.log('Server started on http://localhost:3000');
});
