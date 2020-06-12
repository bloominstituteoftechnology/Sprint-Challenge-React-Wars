import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import PokemonCard from './components/PokemonCard'

const BASE_URL = 'https://api.pokemontcg.io/v1/cards'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

axios.get(`${BASE_URL}`)
.then(function (response) {
  const byName = searchByName(response.data)
})
.catch(function (error) {
  console.log(error);
})

// .then(function () {
// });
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

// const pokemon = require('pokemontcgsdk')

// // Get all cards
// pokemon.card.all()
// .on('data', function (card) {
//   console.log(card[0].name)
// });

// Filter Cards
// pokemon.card.all({ supertype: 'pokemon', types: 'dragon|fire|flying', hp: 'gt100' })
// .on('data', function (card) {
//     console.log(card.name)
// });

// Get cards on a specific page / pageSize
// pokemon.card.where({ page: 50, pageSize: 500})
// .then(cards => {
//     console.log(cards[0].name)
// })

const searchByName = (data) => {
  console.log(data) /* This should not work, but it does. Data isn't defined, remember? */
  return (<h2>{data}</h2>) // This breaks the render
}

// return ( // data is not defined here, so IMPOSSIBLE to return any retrieved data
//   <div className="App">
//     <h1 className="Header">Characters</h1>
//     <h2>{data}</h2> {/* Yes data is fucking defined. Quit lying! */}
//   </div>
// );

}

export default App;