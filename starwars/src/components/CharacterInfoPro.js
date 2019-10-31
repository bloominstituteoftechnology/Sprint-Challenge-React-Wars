import React, { useState, useEffect } from "react";
import { Container, Card, Loader, Dimmer, Image, Button } from "semantic-ui-react";
import axios from "axios";

const CharacterInfoPro = props => {
  const [starWarsData, setStarWarsData] = useState([]);
  const [refreshCard, setRefreshCard] = useState();

  useEffect(() => {

    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setStarWarsData(response.data.results);
      })
      .catch(error => console.log(`We have an error ${error}`));
  }, [refreshCard]);

  //Map not needed 
  const charName = starWarsData.map(name => {
    return name.name;
  });

  const randomChar = charName[Math.floor(Math.random() * charName.length)];

  const randomCharList = starWarsData[Math.floor(Math.random() * starWarsData.length)]

  useEffect(() => {

    console.log(`useEffect radomCharList: ${randomCharList}`)

  }, [starWarsData])


  console.log(randomCharList)
  

  return (
    <Container style={{ margin: 20 }}>
      <Card>
        <Image src="https://www.fillmurray.com/400/600" wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {randomChar}
          </Card.Header>
          <Card.Meta>
            <span className="date">DOB: 19BBY</span>
          </Card.Meta>
          <Card.Description>
            Star Wars is an American epic space-opera media franchise created by
            George Lucas.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            onClick={() => {
              setRefreshCard(refreshCard + 1);
            }}
          >
            Click Here
          </Button>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default CharacterInfoPro;
