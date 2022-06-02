const model=require("../models")

//Get All users
const getStudents=async(req,res)=>{
try {
    const result=  await model.Students.findAll({})  
    res.send(result)
} catch (error) {
    res.send(error)
}
}

//create user
const creatUser=async(req,res)=>{
    try {
        const result=await model.Students.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            class:req.body.class
        })
        res.status(201).json({
            message:"user created succesfully",
            data:result
        })

    } catch (error) {
        console.log(error)
}
}

module.exports={
    getStudents,
    creatUser
}

