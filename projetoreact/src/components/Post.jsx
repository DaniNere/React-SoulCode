import React from 'react';
import '../styles/Post.css';

function Post({ title, description, imageUrl }) {
    return (
        
        <div className="post-card">
            <img src={imageUrl} alt={title} className="post-image" />
            <div className="post-content">
                <h3 className="post-title">{title}</h3>
                <p className="post-description">{description}</p>
            </div>
        </div>
    );
}

export default Post;
