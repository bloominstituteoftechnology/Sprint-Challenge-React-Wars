// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Card from './Card';
import './StarWars.css'

class CardInfo extends React.Component {

    render() {
        return (
            <div className="cardInfo">
                {this.props.starWarsInfo.map(obj => {
                    return (
                        <div key={obj.created}>
                            <Card starWarsInfo={obj} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardInfo