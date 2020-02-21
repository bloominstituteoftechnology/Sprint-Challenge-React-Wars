import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Card,  Badge , CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import FilmCharacter from './FilmCharacter'



const FilmCard = () => {
    const [film, setFilm] = useState([])
    useEffect(() => {
      axios.get('https://swapi.co/api/films/')
      .then(response => {
        // console.log(response)
        return setFilm(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])
  
    // console.log(film)



   return(
    <div>
        {film.map(film => {
        return (
            <div>
            <Card>
            <CardHeader>{film.title}  <Badge href="#" color="dark">{film.release_date}</Badge></CardHeader>
            <CardBody>
              <CardTitle>Directed by {film.director}</CardTitle>
              <CardText>{film.opening_crawl}</CardText>
              <CardTitle>Characters:</CardTitle>
              <FilmCharacter  CharUrl = {film.characters} />


            </CardBody>
            </Card>
            
        </div>
        )}
        )}

    </div>
    
   )
  
  }


  export default FilmCard;