import React from'react';
import './displayComponent.css';

export class DisplayComponent extends React.Component {
	render() {
		const chars = this.props.charsData;
		return (
			<div>
				{chars.map((char) => {
					return (
						<div className="charInfo">
						    <div>
								<div className="charName"><h2>{char.name}</h2></div>
								<ul className="infoList">
									<li><b>DOB</b>: {char.birth_year}</li>
									<li><b>Gender</b>: {char.gender}</li> 
									<li><b>Height</b>: {char.height}</li>
									<li><b>Eye_Color</b>: {char.eye_color}</li>
									<li><b>Hair_Color</b>: {char.hair_color}</li>
									<li><b>Skin_Color</b>: {char.skin_color}</li>
									<li><b>Mass</b>: {char.mass}</li>
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
