import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import userModel from "../models/userModel.js"
const secret = 'test';

export const login = async(req, res)=>{
    const {email, password} = req.body;
    console.log(req.body);
    try {
        const existingUser = await userModel.findOne({ email });
    
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
    
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });
    
        res.status(200).json({ result: existingUser, token });
      } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
      }
}

export const signup = async(req, res)=>{
    const {name, email, phone, password} = req.body;
    //console.log(req.body);

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({ email, password: hashedPassword, name, phone });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
}

export const profile = (req, res)=> {
    res.send("<h1>Hey There</h1>");
} 