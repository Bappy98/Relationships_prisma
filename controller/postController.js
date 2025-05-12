const prisma = require('./../DB/db.config')
const createPost = async(req,res) =>{
    const {title,description,user_id} = req.body
    const newPost = await prisma.post.create({
        data:{
            title:title,
            description:description,
            user_id:Number(user_id)
        }
    })
    return res.status(200).json(newPost)
}

const postById = async(req,res) =>{
    const postId = req.params.id
    const post = await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })
    return res.status(200).json(post)
}

const deletePost = async(req,res) =>{
    const postId = req.params.id
    const post = await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    })
    return res.status(200).json(post)
}

const fetchPosts = async(req,res) =>{
    const posts = await prisma.post.findMany({
        include:{
            comment:{
                include:{
                    user:true
                }
            }
        }
    })
    return res.status(200).json(posts)
}
module.exports = {
    createPost,
    postById,
    deletePost,
    fetchPosts
}