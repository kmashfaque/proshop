// const express = require("express");
import express from "express";
import colors from "colors";
import path from "path";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

// const products = require("./data/products");
import productRouter from "./router/productRouter.js";
import userRoutes from "./router/userRoutes.js";
import orderRoutes from "./router/orderRoutes.js";
import uploadRoutes from "./router/uploadRoutes.js";

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running ");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
