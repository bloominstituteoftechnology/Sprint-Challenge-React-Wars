import React from "react";
import axios from "axios";
import SWCard from "./SWCard";
import { Container } from "bootstrap";

export default function SWList() {
  const [sWData, setUpData] = React.useState([]);

  useEffect(() => {
    console.log("React Wars");
    axios
      .get(
        "https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/"
      )
      .then(response => {
        setUpData(response.sWdata.results);
        console.log(response.sWdata.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div>
        {sWdata.map((pic, fix) => {
          return (
            <SWCard
              id={fix}
              name={pic.name}
              gender={pic.gender}
              height={pic.height}
              skin={pic.skin_color}
            />
          );
        })}
      </div>
    </Container>
  );
}
