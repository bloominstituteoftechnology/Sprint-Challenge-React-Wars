import React from 'react';

const PostContainer = props => {
    return <div key={props.char.name}>{props.char.name} </div>;
};

export default PostContainer;