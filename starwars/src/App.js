import React from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
import React from 'react';
import axios from 'axios'
import './App.css';
//import Character from './components/Character';
 
 
class Character extends React.Component {
  state = {
      name:'',
      birth_year:'',
      status:'',
      id:0
  };
  
  componentDidMount() {
 
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then( res => {
          const arr = res.data.results
          this.setState({name: arr[this.props.id].name})
          this.setState({status: arr[this.props.id].status})
          console.log(this.state)
          
      })
      .catch( err => {
          console.log("Error:", err);
      })
 
  }
  render() {
      return(
      <div>
          <h3></h3>
          <h2>{this.props.id}:{this.state.name}</h2>
          <p>{this.state.status}</p>
      </div>)
  }
}
 
 
function List(props) {
  const nums = props.nums
  console.log(nums)
  const listItems = nums.map(i => 
    <Character key={i.toString()} id={i} />
    )
  return(
    <div>
      { listItems }
    </div>
  )
    }
  
  
  const nums = [1,2,3,4,5]
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <List nums={nums}/>
      <Character id={ 0 } />
    </div>
  );
}
 
export default App;
