import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";

const Jedi = () =>{



const arr = [...Array(87).keys()]


const [ jediName , setJediName ] = useState('')
	
useEffect( () => { 

arr.forEach( n => {    
axios.get(`https://swapi.co/api/people/${n+1}`)
.then(response => {
setJediName(response.data.name + " has hair color of "+response.data.hair_color)


})
.catch(error => {
console.log("The data was not returned", error);
});
}
 )} , [])//syncs with all props and states




useEffect( () => { 
const main = document.getElementsByClassName('lis')[0]
let div = document.createElement('li') 
div.innerText = `${jediName}`
 main.appendChild(div)


})// syncs with nothing  . l




return (


<div className = "mainDiv">
<ul >
<li style = {{ listStyleType: "none" }} className= "lis"> </li>

</ul>
</div>
)
}

export default Jedi