import React from "react";
import ReactDOM from "react-dom";

const Luke = () => {
  return (
    <div>
      <p>
        "name": "Luke Skywalker", <br />"height": "172",<br /> "mass": "77",{" "}
        <br />"hair_color": "blond",<br /> "skin_color": "fair", <br />"eye_color":
        "blue", <br />"birth_year": "19BBY", <br />"gender": "male",<br />{" "}
        "homeworld": "https://swapi.co/api/planets/1/",<br /> "films": [
        "https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/" ],<br /> "species": [
        "https://swapi.co/api/species/1/" ], <br />"vehicles": [
        "https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"
        ],<br /> "starships": [ "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/" ], <br />"created":
        "2014-12-09T13:50:51.644000Z",<br /> "edited":
        "2014-12-20T21:17:56.891000Z",<br />
        "url": "https://swapi.co/api/people/1/"
      </p>
    </div>
  );
};

export default Luke;
