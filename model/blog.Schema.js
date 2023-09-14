const mongoose = require('mongoose');

let blogSchema=mongoose.Schema({
    title:String,
    img:String,
    content:String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
})

let Blog=mongoose.model("newBlog",blogSchema)

module.exports=Blog;