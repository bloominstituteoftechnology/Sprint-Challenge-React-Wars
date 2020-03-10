import React,{useState,useEffect} from 'react'
import axios from "axios"



 function People() {
     const [person, setPerson]=useState([])
     
     useEffect(()=>{
     axios
         .get("https://swapi.co/api/people/")
         .then((res)=>{
         console.log(res)
        //  res.data.

        })
        .catch((err)=>{console.log(err)})
     },[])
    return (
        <div>
            
        </div>
    )
}
export default People;