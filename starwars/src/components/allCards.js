import React from 'react';
// import Card from './components/card.js';

const Card = ({data}) => {
  console.log(data);

const heightHeight = {
    height: `${data.height}px`
  }
const cardHeight = {
    height: `${data.height}px + 20px`
  }

const heightWidth = {
    height: `${data.height}px`,
    width: `${data.mass}px`
  }

  return (

    <div style={cardHeight} className="card-main" data={data}>
      <div style={heightWidth} className="figure" >
        <div className="height">Height: {data.height}</div>
        <div className="mass">Mass: {data.mass}</div>
      </div>

      <div style={heightHeight} className="card-stats">
        <h1>{data.name}</h1>
          <h2>Stats:</h2>
            <ul>Mass: {data.mass}</ul>
            <ul>Year Born: {data.birth_Year}</ul>
      </div>


    </div>
  )
}

const AllCards = props => {
  console.log(props.data.length);
  return (
    <div className="all-cards-main">
      <div className="button-group">
        <button onClick={props.previous}>Previous</button>
        <button onClick={props.showAll}>Show All</button>
        <button onClick={props.show1}>Show individual</button>
        <button onClick={props.next}>Next</button>
      </div>
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
