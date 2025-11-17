const express = require('express');
const { getComments, createComment, deleteComment } = require('../Controller/comment.controller');

const router = express.Router();

// GET /api/comments/:postId - Get comments for a post
router.get('/:postId', getComments);

// POST /api/comments - Create a comment
router.post('/', createComment);

// DELETE /api/comments/:id - Delete a comment
router.delete('/:id', deleteComment);

module.exports = router;