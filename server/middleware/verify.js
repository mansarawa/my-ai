import jwt from 'jsonwebtoken'

const verify=(req,res,next)=>{
    const token=req.header('token')
    if(!token){
        return res.status(401).json({message:"invalid token",success:false})
    }
  try{
        const decodeUser=jwt.verify(token,process.env.JWT_SECRET)
         req.user=decodeUser
         next();
        } catch (error) {
            console.log('error'+error)
            return res.status(401).json({ message: "Token verification unsuccessful",chat:error, success: false });
          }

}

export default verify