import React from "react";
import SWC from "./SWC";

const SWCList = ({ list }) => {
  return (
    <div className="cardlist-container">
      {list.map((item, i) => {
        return (
          <SWC
            key={i}
            birth_year={list[i].birth_year}
            created={list[i].created}
            edited={list[i].edited}
            eye_color={list[i].eye_color}
            films={list[i].films}
            gender={list[i].gender}
            hair_color={list[i].hair_color}
            height={list[i].height}
            homeworld={list[i].homeworld}
            mass={list[i].mass}
            name={list[i].name}
            skin_color={list[i].skin_color}
            species={list[i].species}
            starships={list[i].starships}
            url={list[i].url}
            vehicles={list[i].vehicles}
          />
        );
      })}
    </div>
  );
};

export default SWCList;
