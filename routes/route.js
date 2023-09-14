const express = require('express');
const { home, login, singup, session, loginget, loginpost, homepage, getblog, postblog, blogpage } = require('../controllers/controllers');
const auth = require('../middleware/middleware');
const passport = require('passport');
const isAouth = require('../middleware/isAouth');
const users = express();

users.get('/',homepage)
users.get('/home',auth,home)
users.get('/session',session)
users.get('/singup',singup)
users.post('/login',login)
users.get('/loginpage',loginget)
users.post('/loginpost',passport.authenticate('local',{failureRedirect:'/loginpage',successRedirect:'/blog'}))
users.get('/blog',isAouth,getblog)
users.post('/blog',postblog)
users.get('/blogpage',blogpage)

// GoogleAuth

users.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }));

users.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports=users;
