const prisma =require("../DB/db.config")

const createUser = async(req,res) =>{
    const {name,email} = req.body
    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(findUser) {
        return res.status(400).json({
            message:"User already exist"
        })
    }
    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email
        }
    }) 
    return res.status(200).json({
        message:"User created successfully",
        data:newUser
    })
}

const getUsers = async(req,res) =>{
    const users = await prisma.user.findMany()
    return res.status(200).json({
        data:users
    })
}

const findById = async(req,res)=>{
    const {id} = req.params
    const user =await prisma.user.findUnique({
        where:{
            id:Number(id)
        }
    })
    res.status(200).json(user)
}

const updateUser = async(req,res)=>{
    try {
        const {name,email} = req.body
    const userId = req.params.id
    const user =await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name:name,
            email:email
        }
    })
    res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

const deleteUser = async(req,res)=>{
    const userId = req.params.id
    const user =await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    res.status(200).json(user)
}


module.exports = {
    createUser,
    getUsers,
    findById,
    updateUser,
    deleteUser
}