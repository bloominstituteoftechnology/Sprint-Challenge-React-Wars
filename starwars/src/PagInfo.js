import React, {useState, useEffect} from "react";
import axios from "axios";
import Pag from "./Pag"
import PAG from "./Pag";


function Paginfo() {
    const [Paginfo, PagsetInfo] = useState([]);
    useEffect ( () =>{
        axios.get("https://rickandmortyapi.com/api/character/")
        
        .then(response =>{
            console.log(response.data)
           PagsetInfo (response.data.info)
        })
        .catch(err =>{
            console.log(err)
        });
    }, []);
    
    return (
        <div className="Pag">
         <PAG
         next = {Paginfo.next}
         />
        </div>
      );
    }
    
    export default Paginfo;
    