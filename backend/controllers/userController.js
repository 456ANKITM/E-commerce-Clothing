import User from "../models/User.js";
import bcrypt from "bcrypt"
import validator from "validator"
import { generateToken } from "../middleware/generateToken.js";
import jwt from "jsonwebtoken"


export const loginUser = async (req, res) => {
  try{
     const {email, password} = req.body;
     const user = await User.findOne({email})
     if(!user) return res.json({success:false, message:"User does not exist"})
      const isMatch = await bcrypt.compare(password, user.password)
    if(isMatch) {
      const token = generateToken(user._id);
      res.json({success:true, token})
    }
    else {
      res.json({success:false, message:"Password did not matched"})
    }

  } catch (error) {
    console.log(error)
     res.json({success:false, message:error.message})
  }
}
export const registerUser = async (req, res) => {
  try{
   const{name, email, password} = req.body;
   const existingUser = await User.findOne({email})
   if(existingUser) {
    return res.json({success:false, message:"Email already exists"})
   }
   // Validating E-mail format and strong password
    if (!validator.isEmail(email)){
      return res.json({success:false, message:"Please enter a valid email"})
    }

    if (password.length < 8 ){
      return res.json({success:false, message:"please, Enter a strong password"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      name, 
      email,
      password: hashedPassword
    })

    const user = await newUser.save();

     const token = generateToken(user._id)
     res.json({success:true,token,message:"User registered"})
  } catch (error) {
     console.log(error)
     res.json({success:false, message:error.message})
  }
}
export const adminLogin = async (req,res) => {
  try{
    const {email, password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true, token})
    } else {
      res.json({success:false, message:"Invalid Credentials"})
    }
  } catch (error) {
    console.log(error)
     res.json({success:false, message:error.message})
  }
}