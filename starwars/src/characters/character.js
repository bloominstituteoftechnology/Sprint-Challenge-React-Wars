import React from 'react';
import Bio from './Star';

    const Characters = props => {
            return (
                   <div>
              {
                props.starwarsChars.map(actor => {
                        return <Bio key={actor.id} actor={actor} />;
                       })
            }
               </div >);
        };

    export default Characters; 