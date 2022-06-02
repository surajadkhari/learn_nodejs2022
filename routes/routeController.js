const express=require("express")
const route=express.Router()
const studentController=require("../controllers/studentController")


route.get("/students/all",studentController.getStudents)


module.exports=route