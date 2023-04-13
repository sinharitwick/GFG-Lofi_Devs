const express = require("express")
var myFunctions = require('../controllers/blog-controller');
const blogRouter = express.Router();

blogRouter.get('/post/:id',myFunctions.getPostByUser);
blogRouter.get('/', myFunctions.getAllBlogs);
blogRouter.post('/add', myFunctions.addBlog);
blogRouter.put('/update/:id', myFunctions.updateBlog);
blogRouter.get('/:id', myFunctions.getById);
blogRouter.delete('/post/delete/:id', myFunctions.deleteBlog);
blogRouter.get('/user/:id', myFunctions.getByUserId);
blogRouter.post('/:id', myFunctions.likeAndUnlikePost);
blogRouter.put('/comment/:id', myFunctions.addComment);
blogRouter.delete('/comment/:id', myFunctions.deleteComment);

module.exports = blogRouter;