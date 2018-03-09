import React, { component} from 'react';
 export default class movie extends component{
     constructor(props) {
         super(props);
         this.state ={
             starwarsChars=[],
         }
     }
     starwarsChars.map((starwarsChar) => {
        return(
          <div key={starwarsChar.results}>
          <p>
         films: `${starwarsChar.films}`,
         species: `${starwarsChar.species}`,
         starships: `${starwarsChar.starships}`,

            </p>
            </div>
        );
     });
     this.setState({starwarsChars:starwarsChars});
     render() {
        return (
          <div className="movie">
                   
            {this.state.props.starwarsChars}
           </div>
        );
      }