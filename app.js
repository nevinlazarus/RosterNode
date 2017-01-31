var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/index');

var multer  =   require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('fileName');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use('/', routes);


app.listen(8080);
// File system
var fs = require('fs');
// Function to write a string to a file
fs.writeFile("/tmp/test", "Hey there!", function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular
 * forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({extended: true}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
  upload(req,res,function(err) {
  if(err) {
    return res.end("Error uploading file.");
  }
    res.end("File is uploaded");
  });
});
