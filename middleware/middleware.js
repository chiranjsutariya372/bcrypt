
const auth=(req,res,next) => {
    if(req.cookies.token=="db"){
        next();
    }
    else{
        res.send("please singup")
    }
};

module.exports = auth;