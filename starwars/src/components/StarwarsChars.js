import React from 'react';

import Character from './Character';

export default function StarwarsChars(props) {

  return (

    <div className='characters'>

      {props.data.map(character => <Character data={character} />)}

    </div>

  );

}
