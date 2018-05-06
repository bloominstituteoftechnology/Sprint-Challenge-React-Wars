import React, { Component } from 'react'



const WaystationForUrls = props => {
    return (
        <div>
            {props.species.map(species => {
                return <ComputationStation key={species} charSpecies={species} />
                    })}
            {props.films.map(film => {
                return <ComputationStation key={film} films={film} />
            })}
            {props.vehicles.map(vehicle => {
                return <ComputationStation key={vehicle} vehicle={vehicle} />
            })}
            {props.starships.map(starship => {
                return <ComputationStation key={starship} starship={starship} />
            })}
            <ComputationStation key={props.homeworld} homeworld={props.homeworld} />
        </div>
    )
}

export default WaystationForUrls