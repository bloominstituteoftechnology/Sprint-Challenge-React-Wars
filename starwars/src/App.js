import React,{ useState,useEffect } from 'react';
import './App.css';
import Axios from 'axios';

import Card from './components/Cards/cards';
import Header from './components/header/header';
import Arrow from './components/BackArrow/backArrow';
import CharacterCards from './components/CharacterCards/Character';
import CharacterCardsWithImage from './components/CharacterCards/characterCardsWImg';
import InputForm from './components/Forms/inputForm';

import StarWars from './components/Cards/Star-Wars-Characters.webp';
import RickAndMorty from './components/Cards/rickandmorty.jpg';
import Pokemon from './components/Cards/pokemon.jpg';

function App() {

  const [pageLocation, setLocation] = useState('intro');
  const [starWarsData, setStarWarsData] = useState([]);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [pokemonData, setPokemonData] = useState('');
  const [PokemonName, setPokemonName] = useState('');


  function pokemonSearch(name){

    setPokemonName(name);

  }

  function changeLocation(name){

    setLocation(name);

  }

  const pokemonSearcher = () =>{

    Axios

        .get("https://pokeapi.co/api/v2/pokemon/" + PokemonName)

        .then(response => {

          setPokemonData(response.data);

        })

        .catch(err => {

          console.log(`${err} is the error in pokemon`)

        })
  }

  useEffect(()=>{

    pageLocation === 'starwars' ? Axios

            .get("https://swapi.py4e.com/api/people")

            .then(response => {

              setStarWarsData(response.data.results);

            })

            .catch((err)=>{

              console.log(`${err} is the error in star wars`);

            })

        :

        pageLocation === 'rickandmorty' ?

            Axios

                .get("https://rickandmortyapi.com/api/character")

                .then(response =>{

                  setRickAndMortyData(response.data.results)

                })

                .catch(err=>{

                  console.log(`${err} is the error in rick and morty`);

                })

            :

            Axios

                .get("")

                .then(response =>{

                })

                .catch(err=>{

                  console.log(`${err} is the error in rick and morty`);

                })

  },[pageLocation]);

  return (pageLocation === 'intro' ?

          <div className="App">

            <Header headertitle = 'Character Wars' />

            <Card clickHandler = {()=>changeLocation('starwars')}
                  logoPic = {StarWars}
                  cardTitle = 'Star Wars'
                  cardContent ="Star wars character repository!"
                  buttonContent ="Click to view Star Wars characters"/>

            <Card clickHandler = {()=>changeLocation('rickandmorty')}
                  logoPic = {RickAndMorty}
                  cardTitle = 'Rick and Morty'
                  cardContent ="Rick and Morty character repository!"
                  buttonContent ="Click to view Rick and Morty characters"/>

            <Card clickHandler = {()=>changeLocation('pokemon')}
                  logoPic = {Pokemon}
                  cardTitle = 'Pokemon'
                  cardContent ="Pokemon character repository!"
                  buttonContent ="Click to search for Pokemon characters"/>

          </div>

          :

          pageLocation === 'starwars' ?

              <div className="App" id="starWars">

                <Header headertitle = 'Star Wars' />

                <Arrow clickHandler = {()=>changeLocation('intro')} />

                {starWarsData.map( item =>{

                  return(

                      <CharacterCards title = {item.name}
                                      firstEntry="Birth Year"
                                      firstEntryText = {item.birth_year}
                                      secondEntry = "Gender"
                                      secondEntryText = {item.gender}
                                      thirdEntry="Height"
                                      thirdEntryText = {item.height}/>

                  );

                })}

                <CharacterCards />

              </div>

              :

              pageLocation === 'rickandmorty' ?

                  <div className="App" id="rickandmortyDiv">

                    <Header headertitle = 'Rick and Morty' />

                    <Arrow clickHandler = {()=>changeLocation('intro')} />

                    {rickAndMortyData.map(item => {

                      return(

                          <CharacterCardsWithImage characterImage = {item.image}
                                                   title = {item.name}
                                                   firstEntry = "Species"
                                                   firstEntryText = {item.species}
                                                   secondEntry = "Location"
                                                   secondEntryText = {item.origin.name}
                                                   thirdEntry = "Status"
                                                   thirdEntryText = {item.status}/>

                      )

                    })}

                  </div>

                  :

                  <div className="App" id="pokemonDiv">

                    <Header headertitle = "Pokemon" />

                    <Arrow clickHandler = {()=>changeLocation('intro')} />

                    <InputForm searcher = {pokemonSearch} name = {PokemonName}
                               findPokemon = {pokemonSearcher}/>

                    {pokemonData != '' ?

                        <CharacterCardsWithImage title = {pokemonData.name}
                                                 characterImage = {pokemonData.sprites.front_default}
                                                 firstEntry = "Height"
                                                 firstEntryText = {pokemonData.height}
                                                 secondEntry = "Weight"
                                                 secondEntryText = {pokemonData.weight}
                                                 thirdEntry = "Base Experience"
                                                 thirdEntryText ={pokemonData.base_experience}
                        />

                        :

                        <div></div>

                    }

                  </div>

  );

}

export default App;
