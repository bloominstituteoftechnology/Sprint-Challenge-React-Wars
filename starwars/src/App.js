import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			starwarsCharacters: []
		};
	}

	componentDidMount(){
		this.getChars('http://swapi.co/api/people/1/');
	}

	getChars = URL => {
		fetch(URL)
		.then(res => {
			return res.json();
		})

		.then(data => {
			this.setState({ starwarsCharacters: data.results });
		})

		.catch(err => {
			throw new Error(err);
		});
	};

	render(){
		return (
			<div className="App">
				<h1 className="Header">React Star Wars!!</h1>
				<div>
					{this.state.starwarsCharacters.map((item) => {
						return (
							<div className='starwarscard' key = {item.edited}>
								<p className='name'>{item.name}</p>
								<div className='info'>
								  <p><u><b>Gender:</b></u> {item.gender}</p>
				                  <p><u><b>Birth Year:</b></u> {item.birth_year}</p>
				                  <p><u><b>Height(cm)</b></u>: {item.height}</p>
				                  <p><u><b>Weight(kg)</b></u>: {item.mass}</p>
				                  <p><u><b>Hair Color:</b></u> {item.hair_color}</p>
				                  <p><u><b>Eye Color:</b></u> {item.eye_color}</p>
			                	</div>
              				</div>	
						)
					})}
				</div>
			</div>
		);
	}
}

export default App;