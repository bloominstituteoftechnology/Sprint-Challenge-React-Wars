import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWars from "./components/StarWars";
import Header from "./components/Header";
import { Container } from "semantic-ui-react";
import Pages from "./components/Pagination";

import "semantic-ui-css/semantic.min.css"
import './App.css';


const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pplPerPage,] = useState(4);

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      const res = await axios.get('https://swapi.co/api/people/')
      setPeople(res.data.results)
      setLoading(false);
    }

    fetchPeople();
  }, []);

  // Get current posts
  const indexOfLastPerson = currentPage * pplPerPage;
  const indexOfFirstPerson = indexOfLastPerson - pplPerPage
  const currentPeople = people.slice(indexOfFirstPerson, indexOfLastPerson);

   const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
    <Header />
    <Container> 
      <StarWars people={currentPeople} loading={loading}/>
    </Container>
    <Pages peoplePerPage={pplPerPage} totalPeople={people.length} paginate={paginate}/>
    </div>
  );
};

export default App;
