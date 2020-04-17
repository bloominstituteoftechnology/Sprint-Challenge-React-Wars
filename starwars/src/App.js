import React, {useState} from 'react';
import './App.css';
import TheForce from "./components/theforce";
import SearchBar from "./components/searchbar";

export default function App() {

  const [pod, setPod] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const getFilteredPeople = () => {
    const term = searchTerm.trim()
    return pod.filter(pt => {
      if (!term) {
        return pt
      }
      if (pt.name.toLowerCase().includes(term.toLowerCase())) {
        return pt
      }
    })
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TheForce setPod={setPod} force={getFilteredPeople()} />
    </div>
  );
}

