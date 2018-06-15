import React, {Component} from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';


class Character extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            height: '',
            mass: ''
        }
    }

    render() {
        return (
            <div className="card-box">
                <Card body className="text-center">
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>
                    Birth Year: {this.props.birth_year}<br/>
                    Gender: {this.props.gender}<br/>
                    Eye Color: {this.props.eye_color}<br/>
                    Hair Color: {this.props.hair_color}<br/>
                    Skin Color: {this.props.skin_color}<br/>
                    Height: {this.props.height}<br/>
                    Mass: {this.props.mass}
                    {/* Homeworld: <a href={this.props.homeworld}>{this.props.homeworld["name"]}</a> */}
                </CardText>
                </Card>
            </div>
        )
    };

    
}

Character.propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair: PropTypes.string,
    eyes: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
};





export default Character; 


// import React from "react";

// const Character = props => {
//   return (
//     <div
//       style={props.character.completed ? { textDecoration: "line-through" } : null}
//       onClick={() => props.handleToggleComplete(props.character.id)}
//     >
//       {props.character.task}
//     </div>
//   );
// };

// export default Character;