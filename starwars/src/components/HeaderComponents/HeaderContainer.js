import React from 'react';
import './Header.css';

const HeaderContainer = () => {
    return (
      <div className = "container">
        <div>
          <img src="https://ibin.co/3whrpKSBbZ81.png" alt = "" className = "headerImg"/>
        </div>
        <div className = "headerText">
          <div className = "headerTitle">
            <p>Lambda School</p>
            <p className = "date">@lambdaschool - 26 Jan</p>
          </div>
          <p>Let's learn react by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!</p>
        </div>
      </div>
    );
  };

export default HeaderContainer;