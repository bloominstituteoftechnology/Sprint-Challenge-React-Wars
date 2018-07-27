import React from 'react'
import './StarWars.css';


class Films extends React.Component{
    constructor(props){
        super(props)
        this.state = {films : props.films}
    }
    getFilm = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data); 
            this.setState({ flim: data.results });
          })
          .catch(err => {
            throw new Error(err);
          });
      };

    render() {

        return (

            <div>{}</div>
        );

    }
}

export default Films; 