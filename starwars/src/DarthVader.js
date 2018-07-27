import React from "react";
import ReactDOM from "react-dom";

const DarthVader = () => {
  return (
    <div>
      <p>
        "name": "Darth Vader", <br />"height": "202", <br />"mass": "136",{" "}
        <br />"hair_color": "none", <br />"skin_color": "white",<br />{" "}
        "eye_color": "yellow", <br />"birth_year": "41.9BBY",<br /> "gender":
        "male", <br />"homeworld": "https://swapi.co/api/planets/1/", <br />"films":
        [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/" ],<br />
        "species": [ "https://swapi.co/api/species/1/" ],<br /> "vehicles": [],<br />
        "starships": [ "https://swapi.co/api/starships/13/" ], <br />"created":
        "2014-12-10T15:18:20.704000Z", <br />"edited":
        "2014-12-20T21:17:50.313000Z",<br />
        "url": "https://swapi.co/api/people/4/"
      </p>
    </div>
  );
};

export default DarthVader;
