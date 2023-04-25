//database connection
const mongoose=require("mongoose");
const e = require("express");
//database connection
mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://chittachandan11:Chitta%40123@cluster0.iccpcb0.mongodb.net/student").then(() => {
    console.log("database connected");
})
.catch((err)=>{
    console.log("error");
})
