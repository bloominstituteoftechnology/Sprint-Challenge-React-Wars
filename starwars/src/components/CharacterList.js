import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

import styled from "styled-components"

const ListContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    margin-left: 5rem;
`;

function CharacterList() {
    const [people, setPeople] = useState([]);
    

    useEffect(()=>{
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response=>{
                const results = response.data.results
                console.log(response);
                setPeople(results);
            })
    },[])

    return (
        <div>
        <ListContainer>
            {people.map(item=>{
                return (
                    <CharacterCard 
                        name={item.name}
                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}
                        skinColor={item.skin_color}
                     />
                )
            })}
        </ListContainer>
    </div>
 )
}


export default CharacterList;