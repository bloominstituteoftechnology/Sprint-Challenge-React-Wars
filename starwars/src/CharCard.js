import React from 'react';
import { Link } from 'react-router-dom';


export default class CharCard extends React.Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ characters: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    }
    Render() {
        return (
            <div>

            </div>
        )
    }
}
