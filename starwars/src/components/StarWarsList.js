import React from 'react';
import StarWarsCard from './StarWarsCard';

export default function StarWarsList(props) {

    return (
        <div>

          {props.data.map((person)=> {
              return <StarWarsCard key={person.name} person={person} />
          })}

        </div>
    )
}
