import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Pic from '../Pic/Pic';
import Details from '../Details/Details';
import ToggleContent from '../ToggleContent/ToggleContent'

import {
    Jumbotron,
    Button,
    ListGroup,
    ListGroupItem } from 'reactstrap';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            starships: [],
            img: ''
        }
    }
    componentDidMount() {
        // this.setState({ img: `https://loremflickr.com/600/600/starwars,chewaka,skywalker?random=${this.props.id}` });
        this.setState({ img: `https://source.unsplash.com/9${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}x9${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}/?starwars,milkyway` });
        console.log(this.state.img);

        console.log(this.props.character.films)
        this.props.character.films.forEach( film => {
            fetch(film)
              .then(res => {
                return res.json();
              })
              .then(data => {
                // console.log(data)
                this.state.films.push(data.title);
                const filmsCopy = this.state.films;
                this.setState({ films: filmsCopy });
                // console.log(this.state);
              })
              .catch(err => {
                // throw new Error(err);
                console.log(`Error fetching URL: ${film}`);
              });
        });

        this.props.character.starships.forEach( ship => {
            fetch(ship)
            .then(res => {
                // console.log(res);
                return res.json();
            })
            .then(data => {
                // console.log(data);
                this.state.starships.push(data.model);
                const starshipsCopy = this.state.starships;
                this.setState({ starships: starshipsCopy });
                // console.log(this.state.starships);
            })
            .catch(e => {
                console.log(`Error fetching Startship: ${ship}`)
            })
        });
    }
    render() {
        const {character} = this.props;
        const {films, starships, img } = this.state;
        return (
            <div className="col-12 col-md-6" >
                <Jumbotron className="custom-card ">
                    <Pic img={img} />
                    <h1 className="display-6">{character.name}</h1>
                    <hr className="my-2" />
                    <Details details={character}/>
                    <hr className="my-2" />
                    <ToggleContent toDisplay={films} display="Films"/>
                    <ToggleContent toDisplay={starships} display="Straships" />
                </Jumbotron>
            </div>
            
        );
    }
}

// const Card = ({character}) => {
//   return (
//     <div className="col-12 col-md-6" >
//       <Jumbotron className="custom-card ">
//           <Pic />
//           <h1 className="display-6">{character.name}</h1>
//           <hr className="my-2" />
//           <Details details={character}/>
//           <hr className="my-2" />
//           <ToggleContent toDisplay={character.films} display="Films"/>
//           <ToggleContent toDisplay={character.starships} display="Straships" />
//       </Jumbotron>
//     </div>
//   );
// };

Card.propTypes = {
    birth_year: PropTypes.number,  // "19BBY"
    created: PropTypes.string,  // "2014-12-09T13:50:51.644000Z"
    edited: PropTypes.string,  // "2014-12-20T21:17:56.891000Z"
    eye_color: PropTypes.string,  // "blue"
    films: PropTypes.arrayOf(PropTypes.string),  // (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
    gender: PropTypes.string,  // "male"
    hair_color: PropTypes.string,  // "blond"
    height: PropTypes.number,  // "172"
    homeworld: PropTypes.string,  // "https://swapi.co/api/planets/1/"
    mass: PropTypes.number,  // "77"
    name: PropTypes.string,  // "Luke Skywalker"
    skin_color: PropTypes.string,  // "fair"
    species: PropTypes.arrayOf(PropTypes.string),  //  ["https://swapi.co/api/species/1/"]
    starships: PropTypes.arrayOf(PropTypes.string),  // (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
    url: PropTypes.string,  // "https://swapi.co/api/people/1/"
    vehicles: PropTypes.arrayOf(PropTypes.string)  // (2
};

export default Card;
