import React from 'react';
import '../components/Style/StarWars.css';

class Card extends React.Component {

    render() {

        return(
            <div className={"cardWrap"}>
                    {this.props.cards.map((card) => {
                            return (
                                <div className="cardWrapper">
          <div className="cardCol">
            <h2 className="justifyR">Name:</h2>
            <h2 className="justifyL">{card.name}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Birth year:</h2>{" "}
            <h2 className="justifyL">{card.birth_year}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Eye color:</h2>{" "}
            <h2 className="justifyL">{card.eye_color}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Gender:</h2>{" "}
            <h2 className="justifyL">{card.gender}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Hair Color:</h2>{" "}
            <h2 className="justifyL">{card.hair_color}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Height:</h2>{" "}
            <h2 className="justifyL">{card.height}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Mass:</h2>{" "}
            <h2 className="justifyL">{card.mass}</h2>
          </div>
          <div className="cardCol">
            <h2 className="justifyR">Skin Color:</h2>{" "}
            <h2 className="justifyL">{card.skin_color}</h2>
          </div>
        </div>
                                
                            )
                            
                        
                    })}
            </div>
        )

    }

}




export default Card;