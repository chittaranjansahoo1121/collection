const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const StudentModel = require("../model/studentModel")

//select student details by id
async function allDetails(req, res) {
    // StudentModel.insertMany([{"name": "test", "rollno": 100}]).then((result) => {
    //     console.log(result);
    // }).catch((e) => {
    //     console.log(e);
    // })

    StudentModel.find().then((result) => {
        res.send({result: result});
    }).catch((e) => {
        res.send(e);
    })
}
async function register(req,res){
       var password="ghjukl";
       var hash = bcrypt.hashSync(password,10);
       bcrypt.hash(password,10,async function(err,hash){

       })
        console.log("hash", hash);
 
 StudentModel.insertMany([{"name":"chitta","email":"chitta@gmail.com","phone":7654456787,"password":hash},{"name":"das","email":"das@gmail.com","phone":2654456787,"password":hash}]) .then((result) => {
       console.log(result);
     }).catch((e) => {
        console.log(e);
     })
    
   return res.status(200).json({
                    message:"success"
   })

}
   



module.exports = { allDetails,register }