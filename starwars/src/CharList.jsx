import React, { Component } from 'react';
import { Card } from 'reactstrap';

export const CharList = ({ chars }) => {
    return (
      <div>
        {chars.map((person => {
          return (
            <Card key={person.count}>
              <p>Name: {person.name}</p>
              <p>Height: {person.height}</p>
              <p>Hair Color: {person.hair_color}</p>
              <p>Eye Color: {person.eye_color}</p>
              <p>DOB: {person.birth_year}</p>
              <p>gender: {person.gender}</p>
              <p>Homeworld: {person.homeworld}</p>
              <div>vehicles: {person.vehicles.map((film, i) => {
                  console.log(film)
                  return (
                      <div key={i}>
                        <p>{film}</p>
                    </div>
                  )
              })}
              </div>
              <div>species: {person.species.map((species, i) => {
                  console.log(species)
                  return (
                      <div key={i}>
                        <p>{species}</p>
                    </div>
                  )
              })}
              </div>
              <div>vehicles: {person.vehicles.map((vehicle, i) => {
                  console.log(vehicle)
                  return (
                      <div key={i}>
                        <p>{vehicle}</p>
                    </div>
                  )
              })}
              </div>
              <div>starships: {person.starships.map((starship, i) => {
                  console.log(starship)
                  return (
                      <div key={i}>
                        <p>{starship}</p>
                    </div>
                  )
              })}
              </div>
              <p>created: {person.created}</p>
              <p>edited: {person.edited}</p>
              <p>url: {person.url}</p>
            </Card>
          )
        }))}
      </div>
    );
  };
  