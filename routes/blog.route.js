const Router = require("express");
const Blog = require("../model/blog.Schema");
const isAouth = require("../middleware/isAouth");

const blogroutes=Router();

blogroutes.get('/newblog',isAouth,(req,res)=>{
    res.render('blog')
})

blogroutes.post('/newblog',async(req,res)=>{
    req.body.userId=req.userId
    let createblog=await Blog.create(req.body)
    res.send(createblog)
})

blogroutes.get('/blogfind',async(req,res)=>{
    let find=await Blog.find().populate("userId")
    res.send(find)
})

module.exports=blogroutes