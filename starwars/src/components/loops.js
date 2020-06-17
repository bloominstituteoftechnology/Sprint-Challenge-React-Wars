// import React, { useState,useEffect } from 'react';
// import '../App.css';
// import axios from 'axios'
// import PokemonCard from './PokemonCard';

// const Loops = () => {

//     const [rarity, setRarity] = useState([]);
  
//     const BASE_URL = 'https://api.pokemontcg.io/v1/cards'
  
//     useEffect(() => {
//       axios.get(BASE_URL)
//         .then(response => {
//           setRarity(response.data.cards);
//           console.log('Response: ', response.data.cards)
//         })
//         .catch(error => {
//           console.log('axios error: ', error);
//         })
//     }, [])
//     console.log('Rarity: ', rarity)
//     return (
//         <div>
//         <PokemonCard key={card.id}></PokemonCard>
//         </div>
//     )
// }

// export default Loops;