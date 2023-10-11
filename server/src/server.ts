import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server connected");
});

mongoose.connect(process.env.DB_URI || "redo").then(() => {
  app.listen(port, () => {
    console.log(`server running at port - http://localhost:${port}`);
  });
});
