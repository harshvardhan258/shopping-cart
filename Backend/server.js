//ES module in node.js
// import express from "express";
// import dotenv from "dotenv";
// import products from "./data/products.js";

const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
