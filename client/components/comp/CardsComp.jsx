import { Eye, MessageSquare, Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardsComp = ({ posts }) => {

  const navigate = useNavigate();

  const handelPostClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className='cards-container'>
      {posts.map((post) => (
        <div 
          className='card' 
          key={post._id} 
          onClick={() => handelPostClick(post._id)}
        >
          <div className='cardHead'>
            <img src={post.avatar} alt={post.author} />
            <div className='flex1'>
              <div className='author'>{post.author}</div>
              <div className='timestamp'>{post.timestamp}</div>
            </div>
          </div>

          <div className="cardTitle">{post.title}</div>

          <div className="Cardexpert">{post.excerpt}</div>

          <div className="cardTag">
            {post.tags.slice(0,3).map((item, index) => (
              <span key={index} className='tag'>#{item}</span>
            ))}
          </div>

          <div className="stats">
            <Star className='star'/>
            <MessageSquare className='comment'/>
            <Eye className='eye'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsComp;
