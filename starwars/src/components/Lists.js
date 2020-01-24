import React, { useState, useEffect } from "react";
import axios from "axios";

function Lists() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(res => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Character Lists</h1>
    </div>
  );
}
export default Lists;
//push 