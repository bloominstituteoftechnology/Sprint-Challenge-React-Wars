import React from 'react';
import Character from './Character';

const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        birth_year: "19BBY"
    },
    {
        name: "C-3PO",
        height: "167",
        birth_year: "112BBY"
    },
    {
        name: "R2-D2",
        height: "96",
        birth_year: "33BBY"
    },
    {
        name: "Darth Vader",
        height: "136",
        birth_year: "41.9BBY"
    }
];

class StarWarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starwarsChars: characters,
            name: "",
            height: "",
            birth_year: ""
        };
    }
    render() {
        return (
            <div>
                <h1>Star Wars Characters:</h1>
                <h1>{this.state.name}</h1>
                <div className="char-list">
                    {this.state.starwarsChars.map((starwarsChars, index) => {
                        return <Character characters={starwarsChars} key={index} />
                    })};
                </div>
            </div>
        )
    }
}

export default StarWarsList;