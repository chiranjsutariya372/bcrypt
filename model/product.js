const mongoose = require('mongoose');

let userproduct=mongoose.Schema({
    title:String,
    img:String,
    price:String
})

let product=mongoose.model('Product',userproduct)

module.exports=product