import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  Token: {
    type: String,
  },
});

const Users = mongoose.model("Users", userSchema);
export default Users;
