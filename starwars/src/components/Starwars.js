import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardHolder} from "../components/Styled";
import {StarCard} from "../components/StarCard";
import { Spinner } from 'reactstrap';

export default function MakeCharacter(){

 const [dude, setDude] = useState([]);

 useEffect(()=>{
     axios.get(`https://swapi.co/api/people/`)
     .then((response)=>{
         console.log(response.data.results);
         setDude(response.data.results);
         console.log(dude);
     })
 },[])

 if(!dude){
     return(
         <div>
             <Spinner color = "info"/>
         </div>
     )
 }

 return(
     <CardHolder>
         {dude.map((d,index)=>(
             <StarCard key = {index} name = {d.name} birth = {d.birth_year} height = {d.height} mass = {d.mass}/>
         ))}
     </CardHolder>
 )

}