import React from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="navbar-spacer"></div>
      <h1 className="main-header">Character Profiles</h1>
      <StarWarsList />
      <div className="footer">
        <p className="footer-text">Copyright &copy; KJ MAGILL 2019.<br />All rights reserved. In Association with Lambda School.</p>
      </div>
    </div>
  );
}

export default App;
