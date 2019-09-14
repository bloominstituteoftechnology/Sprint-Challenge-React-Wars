import React from "react";
import { Card } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css"

const StarWars = ( { people, loading } ) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
    {people.map(p =>(
      <Card className = "cardcl" key = {p.name}>
      <Card.Content>

        <Card.Header>
        {p.name}
        </Card.Header>

        <Card.Description>
        Gender: {p.gender}
        </Card.Description>

        <Card.Description>
        Birthday: {p.birth_year}
        </Card.Description>

      </Card.Content>
    </Card>
    ))}
    </>
  )
}

export default StarWars;