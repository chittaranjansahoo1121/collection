const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
   name: {
      type:String
},
   email: {
      type:String
},
   phone: {
      type:Number
},
   password: {
     type:String
},
})


const StudentModel = new mongoose.model("collection", studentSchema);

module.exports = StudentModel;