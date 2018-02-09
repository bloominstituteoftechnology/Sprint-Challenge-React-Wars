import React, { Component } from 'react';
import './Character.css';

class Character extends Component {

  setHomeworld = (homeworld) => {
    fetch(homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        document.getElementById(`homeworld-${this.props.index}`).innerHTML = `Homeworld: ${data.name}`;
      }) 
      .catch(err => {
        throw new Error(err);
      });
  };

  setFilms = (films) => {
    const romanNumerals = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
    };
    const dataArr = [];
    const promiseArr = [];
    JSON.parse(films).forEach((film) => {
      const promise = new Promise((resolve, reject) => {
        fetch(film)
          .then(res => {
            return res.json();
          })
          .then(data => {
            dataArr.push(data);
            resolve();
          })
          .catch(err => {
            throw new Error(err);
          });
      });
      promiseArr.push(promise);
    });
    Promise.all(promiseArr).then(() => {
      document.getElementById(`films-${this.props.index}`).innerHTML = "\nFilms appeared in:";
      for (let i = 1; i <= 7; i++) {
        const index = dataArr.findIndex(film => film.episode_id === i) 
        if (index !== -1) {
          document.getElementById(`films-${this.props.index}`).innerHTML += `\n\tEpisode ${romanNumerals[i]}: ${dataArr[index].title}`;
        }
      }  
    })
    .catch(err => {
      throw new Error(err);
    });
  };

  setSpecies = (species) => {
    species = JSON.parse(species)[0];
    fetch(species)
      .then(res => {
        return res.json();
      })
      .then(data => {
        document.getElementById(`species-${this.props.index}`).innerHTML = `\nSpecies: ${data.name}`;
      })
      .catch(err => {
        throw new Error(err);
      });    
  };

  setVehicles = (vehicles) => {
    document.getElementById(`vehicles-${this.props.index}`).innerHTML = "\nVehicles:";
    const dataArr = [];
    const promiseArr = [];
    JSON.parse(vehicles).forEach((vehicle) => {
      const promise = new Promise((resolve, reject) => {
        fetch(vehicle)
          .then(res => {
            return res.json();
          })
          .then(data => {
            dataArr.push(data.name);
            document.getElementById(`vehicles-${this.props.index}`).innerHTML += `\n\t${data.name}`;
            resolve();
          })
          .catch(err => {
            throw new Error(err);
        });
      })
      .catch(err => {
        throw new Error(err);
      });
      promiseArr.push(promise);
    });
    Promise.all(promiseArr).then(() => {
      if (!dataArr.some(el => el !== '')) {
        document.getElementById(`vehicles-${this.props.index}`).innerHTML += ' none';
      }
    });
  };

  setStarships = (starships) => {
    document.getElementById(`starships-${this.props.index}`).innerHTML = "\nStarships:";
    const dataArr = [];
    const promiseArr = [];
    JSON.parse(starships).forEach((starship) => {
      const promise = new Promise((resolve, reject) => {
        fetch(starship)
          .then(res => {
            return res.json();
          })
          .then(data => {
            dataArr.push(data.name);
            document.getElementById(`starships-${this.props.index}`).innerHTML += `\n\t${data.name}`;
            resolve();
          })
          .catch(err => {
            throw new Error(err);
        });
      })
      .catch(err => {
        throw new Error(err);
      });
      promiseArr.push(promise);
    });
    Promise.all(promiseArr).then(() => {
      if (!dataArr.some(el => el !== '')) {
        document.getElementById(`starships-${this.props.index}`).innerHTML += ' none';
      }
    });
  };

  componentDidMount() {
    this.setHomeworld(this.props.homeworld);
    this.setFilms(this.props.films);
    this.setSpecies(this.props.species);
    this.setVehicles(this.props.vehicles);
    this.setStarships(this.props.starships);
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.name}</h2>
        <div>{`Height: ${this.props.height}`}</div>
        <div>{`Weight: ${this.props.weight}`}</div>
        <div>{`Hair color: ${this.props.hair_color}`}</div>
        <div>{`Skin color: ${this.props.skin_color}`}</div>
        <div>{`Eye color: ${this.props.eye_color}`}</div>
        <div>{`Birth year: ${this.props.birth_year}`}</div>
        <div>{`Gender: ${this.props.gender}`}</div>
        <div id={`homeworld-${this.props.index}`} />
        <div id={`films-${this.props.index}`} />
        <div id={`species-${this.props.index}`} />
        <div id={`vehicles-${this.props.index}`} />
        <div id={`starships-${this.props.index}`} />
      </div>
    );
  }
}

export default Character;