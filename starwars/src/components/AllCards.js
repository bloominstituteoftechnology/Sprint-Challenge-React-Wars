import React, { Component } from 'react';
import Card from './Card';

class AllCards extends React.Component {
    constructor (props) {
        super(props);

        console.log(this.props.person)
    }

    render(){
        return (
            <div className="allCards">
              {this.props.person.map(person => {
                return (
                    <Card
                     name={person.name}
                     birth={person.birth_year}
                     gender={person.gender}
                     eye={person.eye_color}
                     hair={person.hair_color}
                     height={person.height}
                     mass={person.mass}/>
                );
            })}
            </div>
        )}
}

export default AllCards;