import React from 'react';
import './card.css';

function card(props) {
  return (
    <div className="card">
      <table className="card__Maintable">
        <caption>{props.singChar.name}</caption>
          <tbody>
            <tr>
              <td>
                Weight
              </td>
              <td>
                {props.singChar.mass} {' kg'}
              </td>
            </tr>
            <tr>
              <td>
                Height
              </td>
              <td>
                {props.singChar.height} {' cms'}
              </td>
            </tr>
            <tr>
              <td>
                Birth Year
              </td>
              <td>
                {props.singChar.birth_year}
              </td>
            </tr>
            <tr>
              <td>
                Eye Color
              </td>
              <td>
                {props.singChar.eye_color}
              </td>
            </tr>
            <tr>
              <td>
                Gender
              </td>
              <td>
                {props.singChar.gender}
              </td>
            </tr>
            <tr>
              <td>
                Hair Color
              </td>
              <td>
                {props.singChar.hair_color}
              </td>
            </tr>
            <tr>
              <td>
                Skin Color
              </td>
              <td>
                {props.singChar.skin_color}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

export default card;
