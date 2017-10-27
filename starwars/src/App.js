import React, { Component } from 'react';
import './App.css';
import { Data } from './postFramework';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  // Data (props) {
  //   return (
  //       <div className="Data">
  //           {props.starwarsChars.map((post) => {
  //               return(
  //                   <div className="PostList__post" key={post.username}>
  //                       <div className="PostList__top">
  //                           <img className="PostList__top-thumb" src={post.thumbnailUrl} alt=""/><span className="PostList__top-name">{post.username}</span>
  //                       </div>
  //                       <br />
  //                       <img className="PostList__post-postimage" src={post.imageUrl} alt="work!"/>
  //                       <br />
  //                       {/* buttons */}
  //                       <div className="PostList__post-likes">{post.likes} likes</div>
  //                       <br />
  //                       {post.comments.map((comment) => {
  //                           return (
  //                           <div className="PostList__comment" key={comment.text}>
  //                               <span className="PostList__comment-name">{comment.username}: </span><span className="PostList__comment">{comment.text}</span>
  //                           </div>
  //                           );
  //                       })}
  //                       <br />
  //                       <div className="PostList__stamp">{post.timestamp}</div>
  //                       <div className="PostList__comment-box">
  //                           <form action="">
  //                               <input className="PostList__comment-input" type="text" placeholder="Add a comment..."></input>
  //                           </form>
  //                       </div>
  //                   </div>
  //               )
  //           })}
  //       </div>
  //   ) 
  // }



  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Data">
            <Data starwarsChars={this.state.starwarsChars}/>
        </div> 
     
      </div>
    );
  }
}

export default App;
