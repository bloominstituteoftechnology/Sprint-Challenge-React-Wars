import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SWList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log("/people endpoint:", res.data.results);
        setPeople(res.data.results);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="character-list">
      {people.map(people => {
       return (


          <CharacterCard
            key={people.index}
            name={people.name}
            height={people.height}
            mass={people.mass}
            eye={people.eye}
            hair={people.hair}
            skin={people.skin}
            birth_year={people.birth_year}
            gender={people.gender}
            homeworld={people.homeworld}
          />
        );
      })}
    //</div>
  );
}

export default SWList;
