const express = require("express")
var myFunctions = require('../controllers/blog-controller');
const blogRouter = express.Router();

blogRouter.get('/', myFunctions.getAllBlogs);
blogRouter.post('/add', myFunctions.addBlog);
blogRouter.put('/update/:id', myFunctions.updateBlog);
blogRouter.get('/:id', myFunctions.getById);
blogRouter.delete('/:id', myFunctions.deleteBlog);
blogRouter.get('/user/:id', myFunctions.getByUserId)

module.exports = blogRouter;