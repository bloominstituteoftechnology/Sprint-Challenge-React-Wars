import React from 'react';
import './Card.css';

const CardContainer = () => {
    return (
      <div className = "cardContainer">
        <a href = "reactjs.org">
            <img src = "https://ibin.co/3wnC6SgIOJud.png" alt = "" className = "cardContainerImg"/>
            <p>Get started with React</p>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p>reactjs.org</p>
        </a>
      </div>
    );
  };

export default CardContainer;