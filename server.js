/**
 *  server.js
 * 
 *  Creates the Express server and handles GET and POST requests
 * 
 */

var express     = require('express');
var bodyParser  = require('body-parser');
var multer      = require('multer');
var upload      = multer({dest:'uploads/'});
var fs          = require('fs');
var path        = require('path');

/* app instance */
var app = express();


/* POST route */
app.post('/upload', upload.single('upload'), function (req, res) {
  res.sendStatus(200);
});


/* Middleware settings */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


/* GET route */
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

/**
 * Lauching the actual server
 */
var server = app.listen(8081, function () {
   var port = server.address().port
   console.log("Palvelin kuuntelee portissa %s", port)
})
