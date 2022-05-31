const express=require("express")
const app=express()
const port=3000
const bodyParser = require("body-parser")
app.use(bodyParser.json());


const userRoute=require("./routes/userRoute")





app.use("/api/user",userRoute)









app.listen(port,()=>{
    console.log("server is running")
})


