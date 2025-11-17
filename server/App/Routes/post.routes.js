const express = require('express');
const {postRead,postReadById, deletePost} = require('../Controller/post.controller');

const routes = express.Router();

routes.get('/read', postRead);
routes.get('/read/:id', postReadById);
routes.delete('/delete/:id', deletePost);


module.exports = routes;

