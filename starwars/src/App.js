import React, { Component } from 'react';
import './App.css';
import StarCard from './components/Card.js';
import StarPagination from './components/Pagination.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			page: 1,
			prev: '',
			next: ''
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people');
	}

	// componentDidUpdate(prevState) {
	// 	if (this.state.starwarsChars !== prevState.starwarsChars) {
	// 		this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`)
	// 	}
	// }

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ starwarsChars: data.results, next: data.next, prev: data.previous });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	setPage = (event) => {
		this.setState({ page: Number(event.target.innerText) }, () => this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`))
	}

	prevPage = () => {
		if (this.state.page > 1){
			this.setState((prevState) => {
				return {page: prevState.page - 1};
			}, () => this.getCharacters(this.state.prev));
		}
	}

	nextPage = () => {
		if (this.state.page < 5) {
			this.setState((prevState) => {
				return { page: prevState.page + 1 };
			}, () => this.getCharacters(this.state.next));
		}
	}

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<StarCard char={this.state.starwarsChars} />
				<StarPagination setPage={this.setPage} prevPage={this.prevPage} nextPage={this.nextPage} />
			</div>
		);
	}
}

export default App;
