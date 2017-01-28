var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', function(req, res) {
  res.render('index', {ready: "Not ready"});
});

app.listen(8080);
