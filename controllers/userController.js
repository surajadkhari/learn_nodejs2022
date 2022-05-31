const model=require("../models")

//getallUsers
const getAll=async(req,res)=>{
const user=await model.User.findAll({})
res.send(user)
}

//getbyId
const getbyId=async(req,res)=>{
        const user=await model.User.findOne({
            where : {id : req.params.id},
            // attributes : ['id', 'full_name', 'age']
        })
       if(!user){
           res.status(400).json({
               message : "User does not exist"
           })
       } else {
           res.send(user)
       }
   
    
}


//create user
const createUser=async(req,res)=>{
    const result=await model.User.create(req.body)
    res.send(result);




    // res.json({
    //     message:"User has been created",
    //     body:result
    // })
}

module.exports={
    getAll,
    createUser,
    getbyId
}