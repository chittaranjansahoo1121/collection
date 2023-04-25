const express = require ("express");
const router = express.Router();


const {allDetails,update, register}=require ("../../controller/studentController");


router.get("/stud",allDetails)
router.post("/register",register)

//exports the router
module.exports=router;