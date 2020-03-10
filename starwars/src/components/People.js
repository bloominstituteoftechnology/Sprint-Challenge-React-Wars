import React,{useState,useEffect} from 'react'
import axios from "axios"
import styled from "styled-components"



 function People() {
     const [person, setPerson]=useState([])
     
     useEffect(()=>{
     axios
         .get("https://swapi.co/api/people/")
         .then((res)=>{
         console.log(res)
         setPerson(res.data.results)


        })
        .catch((err)=>{console.log(err)})
     },[])
    return ( 
        <div>
            {person.map((props)=>{
                return(
                    <div style={{padding:"20px",color:"white"}}>
                        {props.name}
                        {props.height}

                    </div>

                )


            })}
        </div>
    )
}
export default People;