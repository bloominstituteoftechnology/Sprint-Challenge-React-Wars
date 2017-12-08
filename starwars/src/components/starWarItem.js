import React from 'react';
import './starWarItem.css';

const StarWarItem = ({ postData }) => {
    let ObjEntries = Object.entries(postData);
    console.log(ObjEntries)
    return (

    <div className="StarWarItem-container">
        <div className="thumbnail">
            <img src={postData.thumbnailUrl} />
            <span><b>{postData.username}</b></span>
        </div>
        <div className="image">
            <img src={postData.imageUrl} />
        </div>
        <div className="Frame">
        {/* {postData? postData.map((StarWarItem, i) => (
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{StarWarItem.birth_year}</b></div>
                    </div>)
                ) : null} */}
        { ObjEntries.map(item => {
            return ( <div className="Line">
                        <div className='desc'>{item[0]}:</div><div className='val'>{item[1]}</div>
                    </div>
            )
                }
            )
        }
        </div>

    </div>
    );}

export default StarWarItem;
