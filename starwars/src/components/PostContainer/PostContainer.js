import React, { Component } from 'react';
import Post from '../PostContainer/Post';
import './PostContainer.css';



class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <div className="Post-container">
            {this.props.starwarsChars.map((post, index) => <Post key={post.name + index} post={post}/>)}
        </div>;
    }
}

export default PostContainer;