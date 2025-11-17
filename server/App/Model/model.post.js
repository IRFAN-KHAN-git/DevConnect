const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
    type: String,
    required: true
    },
    avatar: String,
    timestamp: String,
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    content: String, 
    excerpt: String,
    tags:[String],
    stars:{
        type: Number,
        default: 0
    },
    comments:{
        type: Number,
        default: 0
    },
    views:{
        type: Number,
        default: 0
    }
},{timestamps: true});

let postModel = mongoose.model("post",postSchema , "post");

module.exports = postModel;