import React from 'react';
import './Cards.css';

const Cards = (props) => {
    return (
        <div className="card">
            <table className="card__table">
                <caption>{props.charac.name}</caption>
                <tbody>
                    <tr className="card__row">
                        <td>
                            Height
                        </td>
                        <td>
                            {props.charac.height} {' cm'}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Mass
                        </td>
                        <td>
                            {props.charac.mass} {' kg'}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Hair Color
                        </td>
                        <td>
                            {props.charac.hair_color}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Skin Color
                        </td>
                        <td>
                            {props.charac.skin_color}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Eye Color
                        </td>
                        <td>
                            {props.charac.eye_color}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Birth Year
                        </td>
                        <td>
                            {props.charac.birth_year}
                        </td>
                    </tr>
                    <tr className="card__row">
                        <td>
                            Gender
                        </td>
                        <td>
                            {props.charac.gender}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cards;