import React from 'react';
import InfoList from '../components/InfoList';

class Character extends React.Component {
    render() {
        return (
            <div className={'characterDiv'}>
                <h1>{this.props.char.name}</h1>
                <InfoList char={this.props.char}/>
            </div>
        )
    }
}


export default Character;