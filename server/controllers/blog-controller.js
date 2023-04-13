const Blog = require('../models/Blog')
const User = require('../models/User')
const mongoose = require('mongoose')

const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err)
    }
    // if(!blogs)
    // return res.status(404).json({message: "No Blogs Found"})
    return res.status(200).json({blogs:blogs})
}

const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err)
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to Find a User by this ID"})
    }
    const blogbj={title,
        description,
        image,
        user
    // createdAt,
        // likes,
        // comments
    }
    const blog = new Blog(blogbj);
    try {
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await blog.save({session});
        // existingUser.blogs.push(blog);
        // await existingUser.save({session});
        // await session.commitTransaction();
        await blog.save();
        return res.status(200).json({blog:blogbj});

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err})
    }
    
}

const updateBlog = async (req, res, next) => {
    const { title, description, image } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description,
            image
        },{new:true})
    } catch (err) {
        return console.log(err)
    }
    if(!blog)
    return res.status(500).json({message: "Unable to Update the Blog"})
    return res.status(200).json({blog});
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if(!blog){
        return res.status(404).json({message: "No Blog Found"})
    }
    return res.status(200).json({blog});
}

const deleteBlog = async(req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id);
        // await blog.user.blogs.pull(blog);
        // await blog.user.save();
    } catch (err) {
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to delete"})
    }
    return res.status(200).json({deleted:blog,message: "Successfully deleted"});
}

const getByUserId = async (req, res, next) => {
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate("blogs");
    } catch (err) {
        return console.log(err);
    }
    if(!userBlogs)
    {
        return res.status(404).json({message: "No Blogs Found"})
    }
    return res.status(200).json({blogs: userBlogs})
}

const likeAndUnlikePost = async (req, res, next) => {
    const id = req.params.id;
    try {
        const blog = await Blog.findById(id);

        if(!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        if(blog.likes.includes(id)){
            const index = blog.likes.indexOf(id);

            blog.likes.splice(index, 1);

            await blog.save();

            return res.status(200).json({
                success: true,
                message: "Post Unliked"
            })
        }

        blog.likes.push(id);
        await blog.save();
        return res.status(200).json({
            success: true,
            message: "Post Liked"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const addComment = async (req, res, next) => {
    const id = req.params.id;
    try {
        const blog = await Blog.findById(id);
        if(!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }
        let commentIndex = -1;

        blog.comments.forEach((item, index) => {
            if(item.user.toString() === req.user._id.toString()) {
                commentIndex = index;
            }
        })

        if(commentIndex !== -1) {
            blog.comments[commentIndex].comment = req.body.comment;
    
            await blog.save();
            return res.status(200).json({
                success: true,
                message: "comment updated"
            })
        }else {
            blog.comments.push({
                user: req.user._id,
                comment: req.body.comment
            });

            await blog.save();
            return res.status(200).json({
                success: true,
                message: "Comment added"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const blog = await blog.findById(req.params.id);

        if(!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }
        if (blog.user.toString() === req.user._id.toString()) {
            if(req.body.commentId == undefined) {
                return res.status(400).json({
                    success: false,
                    message: "Comment Id is required"
                })
            }
            blog.comments.forEach((item, index) => {
                if(item._id.toString() === req.body.commentId.toString()) {
                    return post.comments.splice(index, 1);
                }
            });
            await post.save();

            return res.status(200).json({
                success: true,
                message: "",
            })
        }else {
            blog.comments.forEach((item, index) => {
                if(item.user.toString() === req.user._id.toString()) {
                    return post.comments.splice(index, 1);
                }
            })
            await postsave();

            res.status(200).json({
                success: true,
                message: "Your comment has been deleted"
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
const getPostByUser=async(req,res,next)=>{
    const userId=req.params.id;
    try {
        const resp=await Blog.find({user:userId});
        return res.status(200).json({blogs:resp})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal sever Error")
    }
}
module.exports = {
    getPostByUser,
    getAllBlogs,
    addBlog,
    updateBlog,
    getById,
    deleteBlog,
    getByUserId,
    likeAndUnlikePost,
    addComment,
    deleteComment
 }