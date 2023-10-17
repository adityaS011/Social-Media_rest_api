import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/blog-controller.js';


const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.get("/user/:id",getByUserId);
blogRouter.delete("/delete/:id",deleteBlog);
// router.post("/signup",signup)
// router.post("/login",login)
export default blogRouter;