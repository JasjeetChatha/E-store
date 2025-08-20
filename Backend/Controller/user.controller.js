import mongoose from "mongoose";
import User from "../Beans/user.bean.js";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({success: true, data: users});
  } catch (error) {
    next(error);
  }
};
export const getUserById = async (req,res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({success: true, data: user});
  } catch (error) {
    next(error);
  }
};
export const addNewUser = async (req,res, next) => {
  const {name, email, password, address, age} = req.body;
  const newUser = {
    name,
    email,
    password,
    address,
    age: parseFloat(age),
  };

  const user = new User(newUser);
  await user.save();
};
export const deleteUser = async (req,res, next) => {
  await User.findByIdAndDelete(req.params.id);
};
