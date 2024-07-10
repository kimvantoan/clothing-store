const jwt = require('jsonwebtoken')

const authMiddleware =async (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.json({success:false,message:"token not found"})
        }
        
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=decode.id
        next()
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}

module.exports={authMiddleware}