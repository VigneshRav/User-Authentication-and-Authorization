import Users from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; //split(' ')[1] => Bearer Token

  if (!token) {
    res.status(401).json({
      message:
        "Unauthorized User(Token not found). Only Authorized Users are allowed to view the User's information. The User need to login to become a authorized user",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
