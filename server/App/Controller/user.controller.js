const userModel = require("../Model/model.user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
let userAuth = async (req, res) => {
  

  try {
    const { username, email, fullName, password } = req.body;

    if (!username || !email || !fullName || !password) {
      return res.status(404).json({
        mes: "please fill all the given field",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        mes: "User with this email or username already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: hashedPass,
      fullName,
      avatar: `${BASE_URL}/uploads/profile.jpg`
    });

    await newUser.save();
    const token = jwt.sign(
  { userId: newUser._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);
   res.status(201).json({
  mes: "User created successfully",
  token: token,
  user: {
    id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    fullName: newUser.fullName,
     avatar: newUser.avatar,
  },
});
  } catch (err) {
    console.log("signup err", err);
    res.status(500).json({
      mes: "Server error. Please try again later.",
    });
  }
};

let userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for:", email);

    //valid input
    if (!email || !password) {
      return res.status(400).json({
        mes: "please provide email and password",
      });
    }

    //find user by using email
    const user = await userModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        mes: "user not found with given email",
      });
    }

    console.log("user found", user.username);

    //compare passwords
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        mes: "Invalid password",
      });
    }

    console.log("correct passowrd");

    //create jwt token
    const token = jwt.sign(
      { userId: user._id },
       process.env.JWT_SECRET, 
       {expiresIn: "7d",}
      );
      console.log("token created");
      
      //final responce
      res.status(200).json({
        mes: "user login success",
        token: token,
        user:{
           id: user._id,
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                avatar: `${BASE_URL}/uploads/${user.avatar}`,
        }
      })

  } catch(err) {
    console.log("login error",err);
    res.status(500).json({
            mes: 'Server error. Please try again later.',
            error: err.message
        });

  }
};

const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;

        // Get user info
        const user = await userModel.findById(userId).select('-password');

        if (!user) {
            return res.status(404).json({
                mes: 'User not found'
            });
        }

        // Get user's posts
        const postModel = require('../Model/model.post');
        const posts = await postModel.find({ author: user.fullName }).sort({ date: -1 });

        res.status(200).json({
            mes: 'Profile fetched successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                avatar: user.avatar,
                createdAt: user.createdAt
            },
            posts: posts
        });

    } catch (err) {
        console.error('Get profile error:', err);
        res.status(500).json({
            mes: 'Server error',
            error: err.message
        });
    }
};

module.exports = { userAuth, userLogin, getUserProfile };
