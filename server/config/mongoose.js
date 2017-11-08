var mongoose = require('mongoose'); // creating object called mongoose 
var fs = require('fs'); // fs is class
var path = require('path');

mongoose.connect('mongodb://localhost/market');

var models_path = path.join(__dirname, './../models');


// it has two methods which are  readdirSync and forEach 
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});