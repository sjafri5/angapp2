var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true  }));
var path = require('path');
//app.use(express.static(path.join(__dirname, './static')));
//app.set('views', path.join(__dirname, './views'));
app.use(express.static( __dirname + '/public/dist/public'  ));
//app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render('index');
})

app.listen(8000, function() {
console.log("listening on port 8000");
})
