const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

let usershcema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})


let user=mongoose.model('blog',usershcema)

module.exports=user