import React from 'react';
import CharTrait from './CharTrait.js';
import './Char.css';


class Char extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        
        this.state = {
            character: props.star,
            name: props.star.name,
            unwantedTraits: { 'name': true, 'url': true, 'homeworld': true, 'films': true, 'vehicles': true },
            showList: false
        };
    }
    
    handleListShow = () => {
        let showing = this.state.showList;
        showing = !showing;
        this.setState({
            showList: showing
        })
    };

    render(){
        return (
            <div className="character-container" onClick={this.handleListShow} >
                <div style={{fontWeight:'800'}}>{this.state.character.name}</div>
                <div className="character-list" style={this.state.showList ? {display: 'flex'} : {display: 'none'}}>
                {
                    Object.keys(this.state.character).map((k) => { 
                            if (k != this.state.unwantedTraits[i]) {
                                return <CharTrait className="trait" traitName={k} traitValue={this.state.character[k]} />
                            }
                    })
                }
                </div>
            </div>
        )
    }
};

export default Char;