import axios from "axios";
const API_URL = "https://devconnect-4a3j.onrender.com/api";

console.log(API_URL)

export const getAllposts = async () => {
  
  const response = await axios.get(`${API_URL}/posts/read`);
  return response.data; 
};

export const getPostById = async (id) =>{
  const response = await axios.get(`${API_URL}/posts/read/${id}`);
  return response.data;
}

export const deleteById = async (id)=>{
  const response = await axios.delete(`${API_URL}/posts/delete/${id}`)
  return response.data;
}

// for signup

export const signup = async (userData)=>{
  try{
    const response =  await axios.post(`${API_URL}/auth/signup` , userData);
    return response.data;
  }
  catch(err){
    throw err
  }
}

//for login

export const login = async (credentials)=>{
  try{
    const response = await axios.post(`${API_URL}/auth/login`,credentials);
    return response.data;
  }catch(err){
    throw err;
  }
}

// ✅ Logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// ✅ Get current user from localStorage
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// ✅ Check if user is logged in
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


// ... existing code ...

// ========== COMMENT APIS ==========

// Get comments for a post
export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${postId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Create a comment
export const createComment = async (commentData) => {
  try {
    const response = await axios.post(`${API_URL}/comments`, commentData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Delete a comment
export const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};


// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/auth/user/${userId}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};