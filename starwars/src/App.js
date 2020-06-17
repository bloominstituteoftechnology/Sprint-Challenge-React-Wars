import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from '../src/components/PokemonCard'
import { Container, Row } from 'reactstrap'
// import Loops from '../src/components/loops'

const App = () => {

  const [cards, setCards] = useState([]);

  const BASE_URL = 'https://api.pokemontcg.io/v1/cards'

  useEffect(() => {
    axios.get(BASE_URL)
      .then(response => {
        setCards(response.data.cards);
        console.log('Response: ', response.data.cards)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

// Get cards on a specific page / pageSize
// pokemon.card.where({ page: 50, pageSize: 500})
// .then(cards => {
//     console.log(cards[0].name)
// })

// const searchByName = (data) => {
//   console.log(data) /* This should not work, but it does. Data isn't defined, remember? */
//   return (<h2>{data}</h2>) // This breaks the render
// }

return ( // data is not defined here, so IMPOSSIBLE to return any retrieved data
    <Container fluid="sm">
      <Row>
    {
              cards.map(card => {
                return (
                  <PokemonCard key={card.id} card={card}></PokemonCard>
                )
              })
            }
            </Row>
    </Container>
);

}

export default App;