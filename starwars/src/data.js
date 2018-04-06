import React, { Component } from 'react';
import './data.css';
import Films from './films';
import Species from './species';
import Starship from './starships';
import Vehicle from './vehicle';
import {
    Card, CardImg, CardText, CardBody, CardHeader
    ,CardTitle,  CardFooter,CardSubtitle, Button
} from 'reactstrap';



class Data extends Component{
    constructor(props){

        

        super (props)
        this.state = {
 }

        console.log(props.dataProps);

    }
   
render(){
    
 return (
      <div>{
     this.props.dataProps.map((p,index) =>{ return( <Card className='Card'>
             <CardHeader className= 'CardHeader'>War Data</CardHeader>
   
        <CardBody>
             <div key={index + p.birth_year}><span>Birth year:</span> {p.birth_year}</div>
             <div key={index + p.created}><span>Created:</span> {p.created}</div>
             <div key={index + p.edited}><span>Edited:</span> {p.edited}</div>
             <div key={index + p.eye_color}><span>Eye color:</span> {p.eye_color}</div>
             <div key={index + p.gender}><span>gender:</span> {p.gender}</div>
             <div key={index + p.hair_color}><span>Hair Color:</span> {p.hair_color}</div>
             <div key={index + p.height}><span>Height:</span> {p.height}</div>
             <div key={index + p.homeworld}><span>Homeworld:</span> {p.homeworld}</div>
             <div key={index + p.mass}><span>Mass:</span> {p.mass}</div>
             <div key={index + p.name}><span>Name:</span> {p.name}</div>
             <div key={index + p.skin_color}><span>Skin Color:</span> {p.skin_color}</div>
             <div key={index + p.url}><span>URL:</span> {p.url}</div>
             <div>
                 <span> Films:</span>{p.films.map( (p,index) => <div key ={index}>{<Films filmsProps={p}/>}</div>)}
             </div>
             <div>
                 <span> Vehicles:</span>{p.vehicles.map((c, index) => <div key ={index}>{<Vehicle vehicleProps={c} />}</div>)}
             </div>
             <div>
                 <span> Species:</span>{p.species.map((d, index) => <div key={index}>{<Species speciesProps={d} />}</div>)}
             </div>
             <div>
                 <span> Starships:</span>{p.starships.map((f, index) => <div key={index}>{<Starship starshipProps={f} />}</div>)}
             </div>                       
             </CardBody>  
             <CardFooter className='CardFooter'>End of Data...</CardFooter>
 </Card>) 
})}</div>
 )
}
}
export default Data; 