//import express
const express=require("express");
//password encription
const bcrypt=require("bcrypt");
//jwt token
const jwt=require("jsonwebtoken");
require("./src/db/data")
//initialize
const app=express();
const router = require("./src/routes/studentRoutes")
//port number
app.listen(process.env.PORT || 3000,console.log("app is running in port 3000"));
//middleware
app.use(express.json());
app.use(router);