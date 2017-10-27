import React from 'react';
import './Card.css';

const Card = (props) => {
  const char = props.char;
  return (
    <div className='char_card'>
      <h4>{ char.name }</h4>
      <div className='char_info'>
        {Object.keys(char).map((info, i)=> {
          if (!(Array.isArray(char[info])) 
          && !(['name', 'created', 'edited'].includes(info))
          && char[info].indexOf('http') === -1) {
            return <span key={i+1}>{`${info}: ${char[info]}`}</span>
          }
        })}
      </div>
    </div>
  );
};

export default Card;