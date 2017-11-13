var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    create: function (req, res) {
        var product = new Product(req.body); 
        // product.creator = req.body.creator
        product.save(function (err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data)
        })
    },

    update: function (req, res) {
        Product.update({_id: req.params.id}, req.body, function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showmine: function (req, res) {
        Product.findOne({_creator: req.params, id}, function (err, data) {
            if(err) {
                return res.json(err);
            } 
            res.json(data);

        })
    },

    showall: function (req, res) {
       
        Product.find({}) 
        .populate('User') 
        .execut(function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    delete: function(req, res) {
        Product.remove({_id: req.params.id}, function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    }
  

}