import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardSubtitle,
    Button,
    CardFooter,
    Row,
    Column
} from 'reactstrap';
import './Charcards.css';

class CharCard extends Component {
    constructor() {
        super();
        this.state = {
            characters [],
        };
    }
 
componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(results => {
        return results.json();
    }).then(data => {
        let characters = data.results.map((characters) => {
            return(
                <div key={character.results}>
                    <src = {character.url} />
                </div>
            )
        })
        this.setState({characters: characters});
        console.log("Characters", this.state.characters);
    })
}

render() {
    return (
        <div className="Character-url">
            {this.state.characters}
        </div>
    )
}

}