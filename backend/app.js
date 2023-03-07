import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import checkoutRouter from "./routes/checkoutRouter.js"
import userRoute from "./routes/userRouter.js"
import productRouter from "./routes/productRouter.js";
import fileRouter from "./routes/file-upload-routes.js";

const app = express();
dotenv.config();

// connect to the database
const url = process.env.MongoDB;
const connect = mongoose.connect(url, {});
connect.then(() => {
  console.log("Database Connected Successfully!"),
    (err) => {
      console.log(err);
    };
});

// middleware to parse request body as JSON
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use("/users", userRoute);
app.use("/products", productRouter); 
app.use("/file", fileRouter);
app.use("/checkout", checkoutRouter);

 
// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
