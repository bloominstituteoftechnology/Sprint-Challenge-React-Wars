import React from 'react';

function Post(props) {
    const post = props.post;
    return (
        <div className='Post'>
            <div className='Post__header'>
                <img src={post.thumbnailUrl} />
                <h3 className='Post__username'>{post.username}</h3>
            </div>

            <div className='Post__image'>
                <img src={post.imageUrl} />
            </div>

            <div className='Post__body'>
                <div className='Post__indications'>
                    <h3 className='Post__likes'>{post.likes} likes </h3>
                </div>
            </div>
        </div>
    );
};

export default Post;