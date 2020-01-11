import React from 'react';
import Card from './Card'


const LandingPage = props => {

  return (
    <div>
        {props.data.map((char) => {
            return <Card key={char} char={char}/>
        })}
    </div>
  );
}

export default LandingPage;

