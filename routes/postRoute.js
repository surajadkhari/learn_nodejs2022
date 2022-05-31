const express=require("express")
const route=express.Router()
const postController=require("../controllers/postController")



route.get("/posts",postController.getAllpost)

module.exports=route
