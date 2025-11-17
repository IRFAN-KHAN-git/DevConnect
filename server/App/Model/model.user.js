const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    avatar:{
        type: String,
        default: "/profile.jpg"
    },
    bio:{
        type: String,
        default: ''
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

},{timestamps: true})

const userModel = mongoose.model('User' ,userShema);
module.exports = userModel;