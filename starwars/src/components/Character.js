import React from 'react'

export default class Character extends React.Component{
    constructor(props) {
        super(props);
        console.log('Props: ', props)
    }
    render() {
        return(
            <div>
                <div>{this.props.character.name}</div>
                <div>{this.props.character.gender}</div>
                <div>{this.props.character.height}</div>
                <div>{this.props.character.weight}</div>
                <div>{this.props.character.skin_color}</div>
                <div>{this.props.character.eye_color}</div>
                <div>{this.props.character.hair_color}</div>
                <div>{this.props.character.birth_year}</div>
            </div>

        );
    }
}