import React from "react";
import './StarWars.css';

class Character extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let props = this.props
        return(
            <div class="box">
                <h1>{props.characterSet.name}</h1>
                <p>Gender:{props.characterSet.gender}</p>
                <p>Birth Year:{props.characterSet.birth_year}</p>
                <p>Height:{props.characterSet.height}</p>
            </div>
        )
    }
}


export default Character