const oauth= require('passport-google-oauth20').Strategy;

const googleAuth=(passport)=>{
    passport.use(
        new oauth(
        {
        clientID: '619023602807-g52k265m3ce1nuivpq740ufaqgsc1028.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:8080/auth/google/callback'
        },
    
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            return done(null, profile)
        }
    ))

    passport.serializeUser((user,done) => {
        done(null,user.id)
    })

    passport.deserializeUser(async(user,done) => {
        let IDfind=await user.find({id})
        done(null,IDfind)
    })
}

module.exports =googleAuth;