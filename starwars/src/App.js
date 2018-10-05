import React from 'react';
import FriendsCard from './components/Cards/FriendsCard';
import './css/App.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      characters: [],
	  
	}
}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people');
	}

	getCharacters = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ characters: data.results });
			})
			.catch((err) => {
				throw new Error(err);
			});
  };
  

	selectProfile(e) {
		e.target.style.color = "blue";
		
	}

	render() {

		return (
			<div>
			<FriendsCard list={this.state.characters} selected={this.selectProfile}  />
		
			</div>
			)
		
	}
}

export default App;
