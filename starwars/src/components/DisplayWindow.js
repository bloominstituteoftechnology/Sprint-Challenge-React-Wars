import React from 'react';
import ReactDOM from 'react-dom'


const DisplayWindow = (props) => {
  // console.log(props);
return(
  <div className="ui card">
    <div className="content">
    {props.children}
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <button className="nextButton">Next</button>
        <button className="previousButton">Previous</button>
      </div>
    </div>
  </div>
)
}

export default DisplayWindow;