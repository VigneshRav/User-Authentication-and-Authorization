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
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//User Login or Sign In Function:
export const loginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const existingUser = await Users.findOne({ Email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const passwordMatch = await bcrypt.compare(Password, existingUser.Password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { _id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    existingUser.Token = token;
    await existingUser.save();
    res
      .status(200)
      .json({ message: "User LoggedIn Successfully", token: token });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
