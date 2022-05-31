const model=require("../models")

const getAll=async(req,res)=>{
const user=await model.User.findAll({})
res.send(user)
}


//
const createUser=async(req,res)=>{
    const result=await model.User.create(req.body)
    res.send(result);
}

module.exports={
    getAll
}