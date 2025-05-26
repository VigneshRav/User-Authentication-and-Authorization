import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import authRouter from "./Routers/userRouter.js";

//Configuration of dotenv to access the port
dotenv.config();

//Initialization of Express.js
const app = express();

//Default middlewares
app.use(express.json());
app.use(cors());

//Database connection
connectDB();

//Default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our Back End" });
});

//Custom route
app.use("/api/auth", authRouter);

//Initialization of port
const port = process.env.PORT || 4000;

//Starting server using Express.js
app.listen(port, () => {
  console.log(`Server started and running on the port ${port}`);
});
