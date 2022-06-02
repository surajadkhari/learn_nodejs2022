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


module.exports={
    getStudents,
}

