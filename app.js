const express=require("express")
const app=express()
const port=3000
const postRoute=require("./routes/postRoute")


// app.get("/",function(req,res){
//     return res.send("he")
// })


app.use("/api",postRoute)


// app.use("/api/user",userRoute);





app.listen(port,()=>
    console.log("Server is running")
)


