const express=require("express")
const route=express.Router()
const userController=require("../controllers/userController")

route.get("/getall",userController.getAll);


module.exports=route