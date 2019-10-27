import React, { useState, useEffect } from "react";
import { Container, Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";

const CharacterInfoPro = () => {
    const [starWarsData, setStarWarsData] = useState([]);

    useEffect(() => {
      axios
        .get("https://swapi.co/api/people")
        .then(response => {
          console.log(response.data.results);
          setStarWarsData(response.data.results);
        })
        .catch(error => console.log(`We have an error ${error}`));
    }, []);

    const charName = starWarsData.map((name) => {
      return `${name.name}`
  })

  const randomChar = charName[Math.floor(Math.random()*charName.length)]

  return(

  <Container style = {{ margin: 20 }}>
  <Card>
  <Image src='https://www.fillmurray.com/400/600' wrapped ui={false} />
  <Card.Content>
    <Card.Header>{randomChar}</Card.Header>
    <Card.Meta>
      <span className='date'>DOB: 19BBY</span>
    </Card.Meta>
    <Card.Description>
      Star Wars is an American epic space-opera media franchise created by George Lucas.
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      22 Friends
    </a>
  </Card.Content>
</Card>
</Container>
  )
};

export default CharacterInfoPro;
