import React, { Component } from 'react'
import BaseStats from './BaseStats'

const ComputationStation = props => {
   
        { if (props.planetUrl === props.homeworld) {
        return <BaseStats homeworld={props.name} />}} 

        {if (props.charSpecies === props.speciesUrl) {
             return <BaseStats species={props.speciesName} />}}
    
       { if (props.filmUrl === props.films) {
            return <BaseStats films={props.filmTitle} />}}
       
       { if (props.starshipUrl === props.starship) {
            return <BaseStats starships={props.starshipName} />}}
       
       { if (props.vehicleUrl === props.vehicle) {
            return <BaseStats vehicles={props.vehicleName} />}}
       }






export { ComputationStation }