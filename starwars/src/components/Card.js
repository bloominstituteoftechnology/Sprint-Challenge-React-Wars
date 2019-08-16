import React from "react";
import { Item } from "semantic-ui-react";


const Card = props => {
 
  return (

        <Item>
          <Item.Content>
            <Item.Header>
      <h2>{props.name}</h2>
           </Item.Header>
           <Item.Description>
       <p>Birth Date: {props.birthday}</p>
      <p>Homeworld: {props.homeworld}</p>
      </Item.Description>
      </Item.Content>
      </Item>
     
    
  );
};
export default Card;