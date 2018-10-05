import React from 'react';
import Card from './Card'
import './StarWars.css'

class Info extends React.Component {

    render() {
        return (
            <div className="info">
            {this.props.info.map(item => {
                return(
                    <div key={item.created}>
                        <Card info={item} />
                    </div>
                );
            })}
            </div>
        );
    }
}

export default Info;