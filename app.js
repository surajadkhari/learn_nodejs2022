const express=require("express")
const app=express()
const port=3000
const studentRoute=require("./routes/routeController")




app.use("/api",studentRoute)


app.listen(port,()=>{
    console.log("server is running")
})


