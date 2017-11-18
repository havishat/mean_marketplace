var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ProductSchema = new Schema ({
    title: {type: String,required: [true, "title missing"], minlength: 3}, 
    description:  {type: String, required: [true, "description missing"], maxlength: 200},    
    price: {type: Number, required: [true, "price missing"], minlength: 1}, 
    location: {type: String, required: [true, "location missing"], minlength: 5}, 
    // image: {type: String, required: [true, "image missing"]},
    _creator: {type: Schema.Types.String, ref: "User"},
}, {timestamps: true})  

mongoose.model('Product', ProductSchema);