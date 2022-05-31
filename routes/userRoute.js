const express=require("express")
const route=express.Router()
const userController=require("../controllers/userController")

route.get("/getall",userController.getAll);
route.get("/:id",userController.getbyId)
route.post("/add",userController.createUser)


module.exports=route