import Users from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//User Registration or Sign Up Function:
export const registerUser = async (req, res) => {
  try {
    const { UserName, Email, Password } = req.body;
    const hashPassword = await bcrypt.hash(Password, 10);
    const newUser = new Users({ UserName, Email, Password: hashPassword });
    newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
