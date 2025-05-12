const prisma = require("./../DB/db.config")

const fetchComments = async(req,res) =>{
    const comments = await prisma.comment.findMany()
    return res.status(200).json(comments)
}

const createComment = async(req,res) =>{
    const {comment,post_id,user_id} = req.body
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                increment:1
            }
        }
    })
    const newComment = await prisma.comment.create({
        data:{
            comment:comment,
            post_id:Number(post_id),
            user_id:Number(user_id)
        }
    })
    return res.status(200).json(newComment)
}

const showComments = async(req,res) =>{
    const id = req.params.id
    const comments = await prisma.comment.findMany({
        where:{
            post_id:Number(id)
        }
    })
    return res.status(200).json(comments)
}

const deleteComment = async(req,res) =>{
    const id = req.params.id
    const comment = await prisma.comment.delete({
        where:{
            id:id
        }
    })
     await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement:1,
            }
        }
    })
    return res.status(200).json(comment)
}

module.exports = {
    fetchComments,
    createComment,
    showComments,
    deleteComment
}