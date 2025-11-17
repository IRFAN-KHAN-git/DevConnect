import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, getComments, createComment, deleteComment, getCurrentUser, isAuthenticated } from '../../services/api';
import { ArrowLeft, Star, MessageSquare, Eye, Share2, Trash2 } from 'lucide-react';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentLoading, setCommentLoading] = useState(false);
  
  const currentUser = getCurrentUser();
  const isLoggedIn = isAuthenticated();

  // Fetch post and comments
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch post
        const postResponse = await getPostById(id);
        const postData = postResponse.post || postResponse;
        setPost(postData);

        // Fetch comments
        const commentsResponse = await getComments(id);
        setComments(commentsResponse.comments || []);

      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Handle comment submit
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('Please login to comment');
      return;
    }

    if (!newComment.trim()) {
      alert('Comment cannot be empty');
      return;
    }

    try {
      setCommentLoading(true);

      const commentData = {
        postId: id,
        userId: currentUser.id,
        author: currentUser.fullName,
        avatar: currentUser.avatar,
        content: newComment
      };

      const response = await createComment(commentData);
      
      // Add new comment to list
      setComments([response.comment, ...comments]);
      
      // Update post comment count
      setPost({ ...post, comments: post.comments + 1 });
      
      // Clear input
      setNewComment('');
      
      alert('Comment posted successfully!');

    } catch (error) {
      console.error('Comment error:', error);
      alert('Failed to post comment');
    } finally {
      setCommentLoading(false);
    }
  };

  // Handle comment delete
  const handleCommentDelete = async (commentId) => {
    if (!window.confirm('Delete this comment?')) return;

    try {
      await deleteComment(commentId);
      
      // Remove comment from list
      setComments(comments.filter(c => c._id !== commentId));
      
      // Update post comment count
      setPost({ ...post, comments: post.comments - 1 });
      
      alert('Comment deleted successfully!');

    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete comment');
    }
  };
  const handelStar = ()=>{
    setPost({ ...post, stars: post.stars + 1 });
  }
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Post not found'}</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-slate-700 text-slate-100 rounded-lg hover:bg-slate-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Post Container */}
        <article className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          
          {/* Author Section */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
            <img 
              src={post.avatar} 
              alt={post.author}
              className="w-14 h-14 rounded-full border-2 border-slate-600"
            />
            <div>
              <h3 className="text-slate-100 font-semibold text-lg">{post.author}</h3>
              <p className="text-slate-400 text-sm">{post.timestamp}</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-slate-700">
            
            <div className="flex items-center gap-2 text-slate-400" onClick={handelStar}>
              <Star className="w-5 h-5 text-amber-300 animate-bounce" />
              <span>{post.stars} stars</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <MessageSquare className="w-5 h-5 " />
              <span>{post.comments} comments</span>
            </div>
          </div>

          {/* Full Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {post.content && (
              <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-slate-700">
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg transition" onClick={handelStar}> 
              <Star className="w-5 h-5 text-amber-300" />
              Star Post
               <span className='text-[12px] '>{post.stars} stars</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg transition">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

        </article>

        {/* Comments Section */}
        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6">
            Comments ({post.comments})
          </h3>

          {/* Add Comment Form */}
          {isLoggedIn ? (
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-4 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none"
                rows="4"
                disabled={commentLoading}
              />
              <div className="mt-3 flex justify-end">
                <button
                  type="submit"
                  disabled={commentLoading || !newComment.trim()}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {commentLoading ? 'Posting...' : 'Post Comment'}
                </button>
              </div>
            </form>
          ) : (
            <div className="mb-8 p-4 bg-slate-900 border border-slate-700 rounded-lg text-center">
              <p className="text-slate-400 mb-3">Please login to comment</p>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Login
              </button>
            </div>
          )}

          {/* Comments List */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-slate-400 text-center py-8">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment) => (
                <div 
                  key={comment._id}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full border border-slate-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-slate-100 font-semibold">
                            {comment.author}
                          </span>
                          <span className="text-slate-500 text-sm ml-2">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        
                        {/* Delete button - only show if comment author */}
                        {currentUser && currentUser.id === comment.userId && (
                          <button
                            onClick={() => handleCommentDelete(comment._id)}
                            className="text-red-400 hover:text-red-300 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Post;