var usercontroller = require('../controllers/usercontrollers.js');
var productcontroller = require('../controllers/productcontrollers.js');
//var polls = require('../controllers/polls.js');
var path = require('path');

//module.exports will allows us to create library
module.exports = function(app) {

    app.post('/user', usercontroller.create);
    // app.get('/email', usercontroller.findEmail);
    app.post('/userlogin', usercontroller.login);

    app.post('/product', productcontroller.create);
    app.get('/product/:id', productcontroller.showmine);
    app.get('/products', productcontroller.showall);
    app.get('/products/random', productcontroller.random);
    app.put('/product/:id', productcontroller.update);

    app.delete('/product/:id', productcontroller.delete)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./marketangular/dist/index.html"))
    });


}
