const commentModel = require('../Model/model.comment');
const postModel = require('../Model/model.post');

// Get comments for a post
const getComments = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await commentModel
            .find({ postId })
            .sort({ createdAt: -1 }); // Newest first

        res.status(200).json({
            mes: 'Comments fetched successfully',
            comments
        });

    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({
            mes: 'Server error',
            error: error.message
        });
    }
};

// Create a comment
const createComment = async (req, res) => {
    try {
        const { postId, userId, author, avatar, content } = req.body;

        // Validate
        if (!postId || !userId || !author || !content) {
            return res.status(400).json({
                mes: 'Missing required fields'
            });
        }

        // Create comment
        const newComment = new commentModel({
            postId,
            userId,
            author,
            avatar,
            content
        });

        await newComment.save();

        // Increment comment count in post
        await postModel.findByIdAndUpdate(
            postId,
            { $inc: { comments: 1 } }
        );

        res.status(201).json({
            mes: 'Comment created successfully',
            comment: newComment
        });

    } catch (error) {
        console.error('Create comment error:', error);
        res.status(500).json({
            mes: 'Server error',
            error: error.message
        });
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await commentModel.findByIdAndDelete(id);

        if (!comment) {
            return res.status(404).json({
                mes: 'Comment not found'
            });
        }

        // Decrement comment count in post
        await postModel.findByIdAndUpdate(
            comment.postId,
            { $inc: { comments: -1 } }
        );

        res.status(200).json({
            mes: 'Comment deleted successfully'
        });

    } catch (error) {
        console.error('Delete comment error:', error);
        res.status(500).json({
            mes: 'Server error',
            error: error.message
        });
    }
};

module.exports = { getComments, createComment, deleteComment };