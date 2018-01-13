import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: {},
			// name: '',
			birthYear: '',
			// gender: '',
			hairColor: [],
			hairColorStyle: [],
			eyeColor: [],
			eyeColorStyle: [],
			skinColor: [],
			skinColorStyle: [],

			// vehicles: [],
		}
	}

	componentDidMount() {
		const player = this.props.player
		this.setState({ player: player });

		this.setState({ birthYear: this.formatBirthYear(player.birth_year) })

		const hairColor = this.parseColor(player.hair_color);
		const hairColorStyle = Array.isArray(hairColor) ? hairColor.map(color => {
			return {
				backgroundColor: color,
				borderStyle: 'solid',
				borderWidth: '1px',
				borderRadius: '50%',
				height: '10px',
				width: '10px',
				'margin-right': '2px',
			}
		}) : 'none';

		const eyeColor = this.parseColor(player.eye_color);
		const eyeColorStyle = Array.isArray(eyeColor) ? eyeColor.map(color => {
			return {
				backgroundColor: color,
				borderStyle: 'solid',
				borderWidth: '1px',
				borderRadius: '50%',
				height: '10px',
				width: '10px',
				'margin-right': '2px',
			}
		}) : 'none';

		const skinColor = this.parseColor(player.skin_color);
		const skinColorStyle = Array.isArray(skinColor) ? skinColor.map(color => {
			return {
				backgroundColor: color,
				borderStyle: 'solid',
				borderWidth: '1px',
				borderRadius: '50%',
				height: '10px',
				width: '10px',
				'margin-right': '2px',
			}
		}) : 'none';

		this.setState({
			hairColor,
			hairColorStyle,
			eyeColor,
			eyeColorStyle,
			skinColor,
			skinColorStyle,
		});
	}

	parseColor(hairColorArr) {
		if (hairColorArr === 'n/a' || hairColorArr === 'none') return hairColorArr
		return hairColorArr.split(/[', ']/)
						.filter(elem => elem !== '')
						.map(color => {
							return this.formatColor(color);
						})
	}

	formatColor(color) {
		const colors = {
			blue: '#0000ff',
			blond: '#faf0be',
			yellow: '#ffff00',
			gold: '#ffd700',
			red: '#ff0000',
			white: '#ffffff',
			brown: '#a52a2a',
			grey: '#808080',
			black: '#000000',
			'blue-gray': '#6699cc',
			auburn: '#a52a2a',
			// human skin colors
			fair: '#ffdab9',
			light: '#ffe6b9',
		}

		return colors[color] ? colors[color] : color;
	}

	formatBirthYear(year) {
		if (year === 'unknown') return year;
		return `${year.slice(0, year.length-3)} BBY`;
	}


	// 																																	  {}
	// const eyeColor = { 'backgroundColor': formatColor(player.eye_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' }
	// const skinColor = { 'backgroundColor': formatColor(player.skin_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' }
	render() {
		// const hairColorStyle = formatColor(player.hair_color) !== player.hair_color ? { 'backgroundColor': formatColor(player.hair_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' } :
		console.log(this.state.hairColor)
		console.log(this.state.hairColorStyle)
		return (
			<div className="PlayerCard">
				<h3 className="PlayerCard-Header">
					{this.state.player.name}
				</h3>

				<div className="PlayerInfo">
					<div className="PlayerInfo__descriptions">
						<div className="PlayerInfo__boxR">born: </div>
						<div className="PlayerInfo__boxR">mass: </div>
						<div className="PlayerInfo__boxR">height: </div>
						<div className="PlayerInfo__boxR">gender: </div>
						<div className="PlayerInfo__boxR">hair: </div>
						<div className="PlayerInfo__boxR">eyes: </div>
						<div className="PlayerInfo__boxR">skin: </div>
					</div>

					<div className="PlayerInfo__values">
						<div className="PlayerInfo__boxL">{this.state.birthYear}</div>
						<div className="PlayerInfo__boxL">{this.state.player.mass} kg</div>
						<div className="PlayerInfo__boxL">{this.state.player.height} cm</div>
						<div className="PlayerInfo__boxL">{this.state.player.gender}</div>
						<div className="PlayerInfo__boxL">
							{Array.isArray(this.state.hairColorStyle) ? this.state.hairColorStyle.map((hairStyle, i) => {						
								return (
									<div style={hairStyle}></div>
								) 
							}) : <div>{this.state.hairColor}</div>}
						</div>
						<div className="PlayerInfo__boxL">
							{Array.isArray(this.state.eyeColorStyle) ? this.state.eyeColorStyle.map((eyeStyle, i) => {						
								return (
									<div style={eyeStyle}></div>
								) 
							}) : <div>{this.state.eyeColor}</div>}
						</div>
						<div className="PlayerInfo__boxL">
							{Array.isArray(this.state.skinColorStyle) ? this.state.skinColorStyle.map((skinStyle, i) => {						
								return (
									<div style={skinStyle}></div>
								) 
							}) : <div>{this.state.skinColor}</div>}
						</div>
					</div>
				</div>

				<div className="PlayerCard-Footer">
				</div>
			</div>
		);
	}
}

/*
const Player = (props) => {
	const player = props.player;

	const formatBirthYear = (year) => {
		if (year === 'unknown') return year;
		return `${year.slice(0, year.length-3)} BBY`;
	}

	const formatColor = (color) => {
		const colors = {
			blue: '#0000ff',
			blond: '#faf0be',
			yellow: '#ffff00',
			gold: '#ffd700',
			red: '#ff0000',
			white: '#ffffff',
			brown: '#a52a2a',
			grey: '#808080',
			black: '#000000',
			'blue-gray': '#6699cc',
			auburn: '#a52a2a',
			// human skin colors
			fair: '#ffdab9',
			light: '#ffe6b9',
		}

		return colors[color] ? colors[color] : color;
	}

	const hairColor = formatColor(player.hair_color) !== player.hair_color ? { 'backgroundColor': formatColor(player.hair_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' } :
																																		  {}
	const eyeColor = { 'backgroundColor': formatColor(player.eye_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' }
	const skinColor = { 'backgroundColor': formatColor(player.skin_color), borderStyle: 'solid', borderWidth: '1px', borderRadius: '50%', height: '10px', width: '10px' }

	return (
		<div className="PlayerCard">
			<h3 className="PlayerCard-Header">
				{player.name}
			</h3>

			<div className="PlayerInfo">
				<div className="PlayerInfo__descriptions">
					<div className="PlayerInfo__boxR">born: </div>
					<div className="PlayerInfo__boxR">mass: </div>
					<div className="PlayerInfo__boxR">height: </div>
					<div className="PlayerInfo__boxR">gender: </div>
					<div className="PlayerInfo__boxR">hair: </div>
					<div className="PlayerInfo__boxR">eyes: </div>
					<div className="PlayerInfo__boxR">skin: </div>
				</div>

				<div className="PlayerInfo__values">
					<div className="PlayerInfo__boxL">{formatBirthYear(player.birth_year)}</div>
					<div className="PlayerInfo__boxL">{player.mass} kg</div>
					<div className="PlayerInfo__boxL">{player.height} cm</div>
					<div className="PlayerInfo__boxL">{player.gender}</div>
					{player.hair_color.map(color) => {						
						<div className="PlayerInfo__boxL"><div style={hairColor}></div></div>
					}}
					<div className="PlayerInfo__boxL"><div style={eyeColor}></div></div>
					<div className="PlayerInfo__boxL"><div style={skinColor}></div></div>
				</div>
			</div>

			<div className="PlayerCard-Footer">
			</div>
		</div>
	);
}
*/

/*
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			birthYear: '',
			gender: '',
			eyeColor: '',
			vehicles: [],
		}
	}

	componentDidMount() {
		const player = this.props.player

		this.setState({ name: player.name })
		this.setState({ birthYear: this.formatBirthYear(player.birth_year) })
		this.setState({ eyeColor: player.eye_color })
		// console.log(this.props.player.name)
		// console.log(this.props.player.films)
		// const films = [];
		// this.props.player.films.map((filmsAPI, i) => {
		// 	fetch(filmsAPI)
	 //      .then(res => {
	 //        return res.json();
	 //      })
	 //      .then(data => {
	 //        films.push(data.results);
	 //      })
	 //      .catch(err => {
	 //        throw new Error(err);
	 //      });
		// })

		// console.log(films)
	}

	formatBirthYear(year) {
		if (year === 'unknown') return year;
		return `${year.slice(0, year.length-3)} BBY`;
	}

	render() {
		const eyeColor = { 'backgroundColor': this.state.eyeColor, borderRadius: '50%', height: '12px', width: '12px' }

		return (
			<div className="PlayerCard">
				<h3 className="PlayerCard-Header">
					{this.state.name}
				</h3>

				<div className="PlayerInfo">
					<div className="PlayerInfo__descriptions">
						<div className="PlayerInfo__boxR">born: </div>
						<div className="PlayerInfo__boxR">gender: </div>
						<div className="PlayerInfo__boxR">eyes: </div>
					</div>

					<div className="PlayerInfo__values">
						<div className="PlayerInfo__boxL">{this.state.birthYear}</div>
						<div className="PlayerInfo__boxL">{this.state.gender}</div>
						<div className="PlayerInfo__boxL"><div className="PlayerInfo__values-box__eyeColor" style={eyeColor}></div></div>
					</div>
				</div>

				<div className="PlayerCard-Footer">
				</div>
			</div>
		);
	}
}

*/

export default Player;