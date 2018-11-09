import React from 'react';

import Card from './Card'

const Page = props => {
  return (
    <div className='page'>
      {props.cards.map(
        char => <Card key={Date.now() + Math.random} char={char}/>
      )}
    </div>
  );
}



export default Page;