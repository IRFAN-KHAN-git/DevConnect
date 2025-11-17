require('dotenv').config()
const routes = require('./App/Routes/post.routes')
const authRoutes = require('./App/Routes/auth.route')
const commentRoutes = require('./App/Routes/comment.routes'); 
const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors')
const app = express();
app.use(cors({
  origin: 'https://devconnect-blush.vercel.app', // your frontend URL
  credentials: true
}));
// Allow React to make requests
app.use(express.json());


app.use('/api/posts',routes);
app.use('/api/auth' , authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.DBURL)
  .then(()=>{
    console.log("Connected to DataBase");
    app.listen(process.env.BASE_URL ,() => {
      console.log(`server is running:= ${process.env.BASE_URL}`);
    });
    
  })
  .catch((err)=>{
      console.log(err)
    })