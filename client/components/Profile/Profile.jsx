import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, getCurrentUser } from '../../services/api';
import { Calendar, FileText, MessageSquare, ArrowLeft } from 'lucide-react';

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentUser = getCurrentUser();
  const isOwnProfile = currentUser && currentUser.id === userId;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await getUserProfile(userId);
        setProfile(response.user);
        setPosts(response.posts || []);
      } catch (err) {
        console.error('Profile error:', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Loading profile...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'User not found'}</p>
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
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Profile Header */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Avatar */}
            <img 
              src={profile.avatar}
              alt={profile.fullName}
              className="w-32 h-32 rounded-full border-4 border-slate-700"
            />

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-slate-100 mb-2">
                {profile.fullName}
              </h1>
              <p className="text-slate-400 text-lg mb-4">@{profile.username}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">{posts.length}</div>
                  <div className="text-slate-400 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">
                    {posts.reduce((sum, post) => sum + post.stars, 0)}
                  </div>
                  <div className="text-slate-400 text-sm">Total Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-100">
                    {posts.reduce((sum, post) => sum + post.comments, 0)}
                  </div>
                  <div className="text-slate-400 text-sm">Comments</div>
                </div>
              </div>

              {/* Joined Date */}
              <div className="flex items-center gap-2 text-slate-400 justify-center md:justify-start">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(profile.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Edit Button (only for own profile) */}
            {isOwnProfile && (
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* User Posts */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Posts by {profile.fullName}
          </h2>

          {posts.length === 0 ? (
            <p className="text-slate-400 text-center py-12">
              No posts yet.
            </p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post._id}
                  onClick={() => navigate(`/post/${post._id}`)}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>⭐ {post.stars}</span>
                    <span>💬 {post.comments}</span>
                    <span>👁️ {post.views}</span>
                    <span className="ml-auto">{post.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;