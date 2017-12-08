import React, {Component} from 'react';

class StarshipSection extends Component {
    constructor() {
        super();
        this.state = {
            starships:[]
        };
    }
    componentDidMOunt() {
        this.setState({starships: this.props.starships})
}
 render () {
     return (
         <div className="starship-section">
         {this.state.starships? this.state.starships.map((starship,i) => (
            <div className="starships" key={i}>
            <div className="starship-list">
            <ul>{starship.starships}</ul></div>
            </div>)
         ) : null}
            </div>
        );
    }
}

export default StarshipSection;
