import React from "react";
import "./StarWars.css";
import Character from "./Character"

class Display extends React.Component{

    render(){
        return(
            <div className="container">
                    {this.props.state.map(item => {
                        return (
                            <Character key={item.created}
                            id={item.created}
                            name={item.name}
                            height={item.height}
                            mass={item.mass}
                            hair={item.hair_color}
                            skin={item.skin_color}
                            birth_year={item.birth_year}
                            species={item.species}
                            home={item.homeworld}
                            films={item.films}
                            />
                        )}
                    )}
            </div>
        )
    }
}

export default Display;