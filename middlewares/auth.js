import User from '../models/User.js'
import  jwt from 'jsonwebtoken';

export const auth=async (req,res,next)=>{
    
    let token=req.cookies?.token?.split(" ")[1];
    try {
        if(!token){
            throw new Error("Please login")
        }
        let decodedToken=await jwt.verify(token,"JwtSecret")
        let user=await User.findById(decodedToken.id)
        if(!user){
            throw new Error("User doesn't exist")
        }
        req.userId=user._id;
        next()
    } catch (error) {
        next(error)
    }
}