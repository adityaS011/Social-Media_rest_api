import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

// import userSchema from './model/User'
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect('mongodb+srv://AdityaBlogApp:atlas@cluster0.jo0hwnf.mongodb.net/BlogApp?retryWrites=true&w=majority'
).then(()=>app.listen(5000)
).then(()=>console.log("Connected to Database and listining on port 5000")
).catch((err)=>console.log(err));
