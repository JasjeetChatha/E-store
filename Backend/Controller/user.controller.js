import mongoose from "mongoose";
import User from "../Beans/user.bean.js";

export const getAllUser=async(req,res,next)=>{
   try{
    const users= await User.find();
    res.status(200).json({success:true,data:users})
   } 
   catch(error){
    next(error);
   }
};
export const getUserById=async(res,req,next)=>{
   try{ users = await User.findById(req.params.id);
    res.status(200).json({success:true,data:users});}
    catch(error)
    {
        next(error);
    }
}