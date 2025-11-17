const express = require('express');
const routes = express.Router();
const { userAuth, userLogin, getUserProfile } = require('../Controller/user.controller')

routes.post('/signup', userAuth);
routes.post('/login', userLogin); 
routes.get('/user/:userId', getUserProfile);

module.exports = routes;