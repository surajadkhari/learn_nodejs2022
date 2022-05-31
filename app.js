const express=require("express")
const app=express()
const port=3000

const userRoute=require("./routes/userRoute")

app.use("/api/user",userRoute)








app.listen(port,()=>
    console.log("Server is running")
)


