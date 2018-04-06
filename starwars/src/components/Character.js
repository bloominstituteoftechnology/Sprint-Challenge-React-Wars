import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, Row, Col, Container
} from 'reactstrap';
import './characters.css'

export default class Character extends React.Component {
    constructor(props) {
        super(props);
        console.log('Props: ', props)
    }

    render() {
        return (
            <div className='CharCard'>
                <div className='CharCard__name'>
                    {this.props.character.name}
                </div>
                <div className='CharCard__two'>
                    <div>
                        <h4>Sex:</h4>
                        {this.props.character.gender}
                    </div>
                    <div>
                        <h4>DOB:</h4>
                        {this.props.character.birth_year}
                    </div>
                    <div>
                        <h4>Heigth</h4>
                        {this.props.character.height}
                    </div>
                    <div>
                        <h4>Mass</h4>
                        {this.props.character.mass}
                    </div>
                    <div>
                        <h4>Skin Color</h4>
                        {this.props.character.skin_color}
                    </div>
                    <div>
                        <h4>Eye Color</h4>
                        {this.props.character.eye_color}
                    </div>
                    <div>
                        <h4>Hair Color</h4>
                        {this.props.character.hair_color}
                    </div>
                </div>
            </div>
        );
    }
}