import React from 'react'
import './StarWars.css';
import Film from './Film';



class Films extends React.Component{
    constructor(props){
        super(props)
        this.state = {films : props.films, filmData: []}
    }

    getFilmData = () => {
        
        const arrayOfFilms = this.state.films; // at this point they are just URL's.
        if(this.state.filmData.length){
            this.setState({filmData: []}); 
            
            
        } else {
            arrayOfFilms.forEach( film => this.getFilm(film));
        }
    }

    




    getFilm = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        const arrayOfFilms = this.state.filmData; 
        
        fetch(URL)
          .then(res => {
            return res.json();
          })
          .then(data => {
            //console.log(data);
            arrayOfFilms.push(data);  
            this.setState({ flimData: arrayOfFilms });
          })
          .catch(err => {
            throw new Error(err);
          });
      };


    render() {
       let films = this.state.filmData; 


        return (

            <div>
                <button onClick = {this.getFilmData}>Films</button>
                
                {films.map((film, i) => <Film key = {i}title = {film.title} director = {film.director} producer = {film.producer} released = {film.release_date}/>)}
            </div>

            
        );

    }
}

export default Films; 