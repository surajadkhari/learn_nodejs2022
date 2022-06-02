const express=require("express")
const app=express()
const port=3000
const bodyParser=require('body-parser')
app.use(bodyParser.json())


const studentRoute=require("./routes/routeController")




app.use("/api",studentRoute)


app.listen(port,()=>{
    console.log("server is running")
})


