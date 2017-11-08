var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema ({
    firstName: {type: String,required: [true, "first name missing"], minlength: 3}, 
    lastName:  {type: String, required: [true, "last name missing"], minlength: 3},    
    email: {type: String, required: [true, "email missing"], minlength: 3}, 
    password: {type: String, required: [true, "password missing"], minlength: 5}, 
    _productId: [{type: Schema.Types.ObjectId, ref:"User"}]
}, {timestamps: true})

mongoose.model('User', UserSchema);


