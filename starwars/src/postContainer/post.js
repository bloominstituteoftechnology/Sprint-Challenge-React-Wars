import React from 'react';

function Post(props) {
    const post = props.post;
    return (
        <div>
            <div>{post.created}</div>
            <div>{post.edited}</div>
            <div>{post.eye_color}</div>
            <div>{post.gender}</div>
            <div>{post.hair_color}</div>
            <div>{post.height}</div>
            <div>{post.mass}</div>
            <div>{post.name}</div>
            <div>{post.skin_color}</div>
        </div>
    );
};

export default Post;