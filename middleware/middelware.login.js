const user = require('../model/shcema')
const bcrypt = require("bcryptjs")

const passportlocal=require('passport-local').Strategy
const localpassport = (passport) => {
    passport.use(new passportlocal(async (username, password, done) => {
        let finduser=await user.findOne({username})

        if(!finduser) {return done(null,false)}

        let passwordsecret=await bcrypt.compare(password,finduser.password)

        if(!passwordsecret) {return done(null,false)}

        else{return done(null,finduser)}  
    }));
    passport.serializeUser((user,done) => {
        done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{
        const Id=await  user.findById(id)
        done(null,Id);
    })
}


module.exports=localpassport;