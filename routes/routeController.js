const express=require("express")
const route=express.Router()
const studentController=require("../controllers/studentController")


route.get("/students/all",studentController.getUsers)
route.get("/students/:id",studentController.getUserById)
route.post("/students/create",studentController.creatUser)
route.delete("/students/:id",studentController.deleteUserByID)



module.exports=route