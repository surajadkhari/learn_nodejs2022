const model=require("../models")

const getAll=async(req,res)=>{
const user=await model.User.findAll({})
res.send(user)
}

module.exports={
    getAll
}