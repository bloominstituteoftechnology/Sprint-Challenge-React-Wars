import React from 'react';
// import Card from './components/card.js';

const Card = ({data}) => {
  console.log(data);

  return (
    <div className="card-main" data={data}>
      <h1>{data.name}</h1>
      <div className="card-stats">
        <h2>Stats:</h2>
          <ul>Height: {data.height}</ul>
          <ul>Mass: {data.mass}</ul>
          <ul>Year Born: {data.birth_Year}</ul>
      </div>
    </div>
  )
}

const AllCards = props => {
  console.log(props);
  return (
    <div className="all-cards-main">
      <h1>Star Wars Characters</h1>
      <div className="all-cards-sub">
        {props.data.map( (each) => <Card
            key={each.name}
            data={each}
          />
        )}
      </div>
      {/* <Card name2={props.name} data2={props.data}/> */}
    </div>
  )
}

export default AllCards;
