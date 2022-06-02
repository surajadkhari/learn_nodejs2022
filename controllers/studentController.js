const res = require("express/lib/response")
const model=require("../models")

//Get All users
const getUsers=async(req,res)=>{
try {
    const result=  await model.Students.findAll({
        // attributes:["first_name"]
        // where:{first_name:"Harson"}
        // order:[
        //     ["id","DESC"],
        //     ['first_name',"ASC"]
        // ]
    })  
    res.send(result)
} catch (error) {
    res.send(error)
}
}



//getUser by ID
const getUserById=async(req,res)=>{
    
        const result=await model.Students.findOne({
            where:{
                id:req.params.id
            },
          
        })
        if(!result){
            res.status(400).json({
                message:"User does'nt exit",
                
            })
        }else{
            res.send(result)
        }

}
//update User
const updateUser=async(async,req)=>{
    try {
        const result=await model.Students.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({
            message:"User is updated",
            data:result
        })
    } catch (error) {
        res.json({
            message:"user is deleted"
        })
        
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


//Delete User
const deleteUserByID=async(req,res)=>{
    try {
        const result= await model.Students.destroy({
            where:{id:req.params.id}
        })
        res.json({
            message:"user has been deleted",
       
        })
    } catch (error) {
        console.log(error)
    }

}

module.exports={
    getUsers,
    creatUser,
    getUserById,
    deleteUserByID,
    updateUser
}

