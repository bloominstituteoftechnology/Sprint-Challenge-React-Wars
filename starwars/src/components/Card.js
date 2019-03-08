import React from "react";
import "./card.css"

class Card extends React.Component {
    constructor(props) {
      super(props);
   }

   render(){
       return(
           <div className="myCard">


               <div className="All">
                   <div className="each">
                       <div className="left">Name</div>
                       <div className="right">{this.props.card.name} </div>
                   </div>
                   <div className="each">
                       <div className="left">Birth Year </div>
                       <div className="right">{this.props.card.birth_year}</div>
                   </div>
                   <div className="each">
                       <div className="left">Created By </div>
                       <div className="right">{this.props.card.created}</div>
                   </div>
                   <div className="each">
                       <div className="left">Edited </div>
                       <div className="right">{this.props.card.edited}</div>
                   </div>
                   <div className="each">
                       <div className="left">Eye-Color </div>
                       <div className="right">{this.props.card.eye_color}</div>
                   </div>
                   <div className="each">
                       <div className="left">Gender </div>
                       <div className="right">{this.props.card.gender}</div>
                   </div>

                   <div className="each">
                       <div className="left">Hair-Color </div>
                       <div className="right">{this.props.card.hair_color}</div>
                   </div>
                   <div className="each">
                       <div className="left">Height </div>
                       <div className="right">{this.props.card.height}</div>
                   </div>
                   <div className="each">
                       <div className="left">HomeWorld </div>
                       <div className="right">{this.props.card.homeworld}</div>
                   </div>

                   <div className="each">
                       <div className="left">Mass </div>
                       <div className="right">{this.props.card.mass}</div>
                   </div>
                   <div className="each">
                       <div className="left">Skin-Color </div>
                       <div className="right">{this.props.card.skin_color}</div>
                   </div>
                   <div className="eachLast">
                       <div className="left">Species </div>
                       <div className="right">{this.props.card.species}</div>
                   </div>


               </div>


           </div>

       )
   }

}

export default Card