var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path'); // will check the path and fix it 

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json());
// app.set('views', path.join(__dirname, './client/views'));
app.use(express.static(path.join(__dirname, '/marketangular/dist')));
// app.set('view engine', 'ejs');
app.use(session({secret: "market"}));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})