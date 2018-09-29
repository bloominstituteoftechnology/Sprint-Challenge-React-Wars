import React from 'react';


import './StarWars.css'
export const StarwarsCard = (props) => {
return (
<div>
        <div>
            <div className="CardBody">
                    <img  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="" />

                    <h1>Starwars</h1>
                    <h2>Character: {props.chars.name}</h2>
                    <p>Skin: {props.chars.skin_color} {' '}
                        Eye Color: {props.chars.eye_color}{' '}
                        Hair: {props.chars.hair_color}{''}
                        Height: {props.chars.height}{' '}
                        Birthday: {props.chars.birth_year}{' '}
                        Weight: {props.chars.mass} {' '}
                    </p>
                    <button>Button</button>
                </div>
            </div>

</div>
);
};