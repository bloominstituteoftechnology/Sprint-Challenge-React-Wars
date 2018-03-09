import React,{ component} from 'react';

    


export const PeopleList = (props) => {
    return (
      <div className="People-Wrapper">
        {props.starwarsChars.map((person => {
          return (
              <div  key={person.data}>
                <h4>{person.name}</h4>
                <h4>{person.films}</h4>
                <div>{person.starship}</div>
              </div>
            );
        }))}
      </div>
    )
  };