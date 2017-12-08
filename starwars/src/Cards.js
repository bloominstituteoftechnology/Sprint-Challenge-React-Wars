import React, { Component } from 'react';
import './Cards.css'

class Cards extends Component {
    
    render() {
        return (
          <div>
            {this.props.dataSet.map((data, index) => 
                <div className="Cards" key={index} > 
                    <div className="charname">{data.name}</div> 
                    <div className="item"><strong>Date of Birth:</strong> {data.birth_year}</div> 
                    <div className="item"><strong>Gender: </strong> {data.gender}</div> 
                    <div className="item"><strong>Height: </strong> {data.height}</div> 
                    <div className="item"><strong>Mass: </strong> {data.mass}</div> 
                    <div className="item"><strong>Eye Color: </strong> {data.eye_color}</div> 
                    <div className="item"><strong>Hair Color: </strong> {data.hair_color}</div> 
                    <div className="item"><strong>Skin Color: </strong>  {data.skin_color}</div> 
                    <div className="item"><strong>Films: </strong>  {data.films.map((film, index) => <div key={index}> {film} </div>)}</div> 
                    <div className="item"><strong>Date Created: </strong>  {data.created}</div> 
                    <div className="item"><strong>Date Edited: </strong> {data.edited}</div> 
                    <div className="item"><strong>Url: </strong> {data.url}</div> 
                    <div className="item"><strong>Homeworld: </strong>  {data.homeworld}</div> 
                    <div className="item"><strong>Species: </strong>  {data.species.map((speciesOne, index) => <div key={index}> {speciesOne} </div>)}</div> 
                    <div className="item"><strong>Starships: </strong>  {data.starships.map((starship,index) => <div key={index}> {starship} </div>)}</div> 
                    <div className="item"><strong>Vehicles: </strong>  {data.vehicles.map((vehicle, index) => <div key={index}> {vehicle} </div>)}</div> 
                </div> 
            )}
          </div>
        );
    }


}

export default Cards
