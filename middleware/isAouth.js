
const isAouth=(req,res,next)=>{
    if(req.user){
       return next();
    }
    else{
       return res.send('please login')
    }
}
module.exports=isAouth