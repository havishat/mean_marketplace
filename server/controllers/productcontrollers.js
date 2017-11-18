var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var User = mongoose.model('User');

module.exports = {
    create: function (req, res) {
        var product = new Product(req.body); 
        product.save(function (err, data) {
            console.log("created", data)
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
        Product.find({_creator: req.params.id}, function (err, data) {
            if(err) {
                return res.json(err);
            } 
            res.json(data);
            console.log("all product" , data)

        })
    },

    showall: function (req, res) {
       
        Product.find({}) 
        .populate('_creator') 
        .exec(function(err, data) {
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
    },

    random: function(req, res) {
        Product.aggregate(
            { $sample: { size: 1 } }, function (err, data) {
                if(err) {
                    return res.json(err);
                }
                res.json(data);
            })
    }
  

}