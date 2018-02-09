import React from 'react';
// import StyledList from './mnt/c/Users/Punit/Dropbox/LambdaSchool/Sprint-Challenge---React/starwars/src/components/StyleList';


export default class DataCard extends React.Component {
  state = {
    makePretty: false,
  };


  render() {
    const card = this.state.makePretty;
    return(
      <div>
        <ul>
          {this.props.starwarsChars.map( x => {
            //starwarsChars.forEach( element => {
              return <li key={x.name}>{
                <div>
                  <div>{x.height}</div>
                  <div>{x.name}</div>
                  </div>
              }</li>;
              console.log("did it work?");
            //})
          })}
        </ul>
      </div>
    );
  }
}