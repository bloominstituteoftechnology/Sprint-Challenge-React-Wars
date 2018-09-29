import React from 'react';
import '../components/Style/StarWars.css';

class Card extends React.Component {

    render() {

        return(
            <div className={"cardWrap"}>
                    {this.props.cards.map((card) => {
                            return (
                                <div className="cardWrapper">
          <div className="cardRow">
            <h2 className="alignRight">Name:</h2>{" "}
            <h2 className="alignLeft">{card.name}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Birth year:</h2>{" "}
            <h2 className="alignLeft">{card.birth_year}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Eye color:</h2>{" "}
            <h2 className="alignLeft">{card.eye_color}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Gender:</h2>{" "}
            <h2 className="alignLeft">{card.gender}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Hair Color:</h2>{" "}
            <h2 className="alignLeft">{card.hair_color}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Height:</h2>{" "}
            <h2 className="alignLeft">{card.height}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Mass:</h2>{" "}
            <h2 className="alignLeft">{card.mass}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Skin Color:</h2>{" "}
            <h2 className="alignLeft">{card.skin_color}</h2>
          </div>
        </div>
                                
                            )
                            
                        
                    })}
            </div>
        )

    }

}




export default Card;