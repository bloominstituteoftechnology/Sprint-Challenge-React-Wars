import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {CardHolder} from "../components/Styled";
import {StarCard} from "../components/StarCard";
export default function MakeCharacter(){

    const [character,setChatacter] = useState([]);
    useState(()=>{
        axios.get("https://swapi.co/api/people/")
        .then((res=>{
            console.log(res.data.results);
            setChatacter(res.data.results);
        }))
    },[])
  

    return(
    <CardHolder>
    {character.forEach((chara,index)=>(
        key = {index}, name = {chara.name}
    ))}
    </CardHolder>
    );
}