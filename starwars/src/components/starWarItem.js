import React from 'react';
import './starWarItem.css';

const StarWarItem = ({ postData }) => (
    <div className="StarWarItem-container">
        <div className="thumbnail">

        </div>
        <div className="image">
          
        </div>
        <div>
        {postData? Object.values(postData).map((values, i) => (
            <div className="comment" key={i}>
            <div className="comment-user"><b>{values}</b></div>
          </div>)
          ) : null}
      </div>

    </div>
);

export default StarWarItem;
