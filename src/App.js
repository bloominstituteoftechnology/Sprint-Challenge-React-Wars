import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import "./components/App.scss"
import PhotoCard from './components/PhotoCard';

// const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
function App() {
    
// let data = 
//   <div>
//     test data, yo.
//   </div>

const [cardData, setCardData] = useState([]);
useEffect(() => {
  console.log("first render");
  axios.get("https://swapi.co/api/people/?format=json")
    .then(res => {
     
      setCardData(res.data);
      console.log('App.js -> %cres.data:', 'color: green', cardData)
    });
    
}, [] );




  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
    <div className="cards">
        {cardData.map(data => (
          
          <PhotoCard name={cardData.name} 
                            gender={cardData.gender} 
                            homeworld = {cardData.homeworld}
                     
                            
                             url={cardData.url} /> 
                  
        ))}
      </div>
      : <div>Loading...</div> 
    </div>
  );
}

export default App;
 
//       <div className="App">
  
//  <PhotoCard name={cardData.name} 
//                   gender={cardData.gender} 
//                   homeworld = {cardData.homeworld}
//                 // name={cardData.name}
                  
//                    url={cardData.url} /> 
//       : <div>Loading...</div> 

    
//   </div>

// );

//   }

// export default App;