import React from "react";
import Card from "./Card"
import "./card.css"

class CardList extends React.Component{
    constructor(props){
       super(props);
    }

    render(){


        return(
            <div className="classList">
            {
                this.props.starchars.map((card,index) => {
                return<Card key={index} card={card}/>
               })

            }
            </div>

        );
    }


}

export default CardList