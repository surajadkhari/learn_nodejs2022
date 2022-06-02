const express=require("express")
const app=express()
const port=3000
const h=require("./controllers/studentController")




app.get("/",h.getStudents)


app.listen(port,()=>{
    console.log("server is running")
})


