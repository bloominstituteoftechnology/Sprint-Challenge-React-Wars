import React from 'react';
import './StarWarItem.css';

const StarWarItem = ({ postData }) => (
    <div className="StarWarItem-container">
        <div className="thumbnail">
            <img src={postData.thumbnailUrl} />
            <span><b>{postData.username}</b></span>
        </div>
        <div className="image">
            <img src={postData.imageUrl} />
        </div>
        <div>
        {postData? postData.map((StarWarItem, i) => (
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{StarWarItem.birth_year}</b></div>
                    </div>)
                ) : null}
        </div>

    </div>
);

export default StarWarItem;
