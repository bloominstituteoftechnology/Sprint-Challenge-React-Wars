import React from 'react';


const Heroes= props => {
    return <button className ={props.className}>{props.action}</button>;
     }

 Heroes.defaultProps ={
     action: 'Luke Skywalker'
     
 }

 
 export default Heroes;