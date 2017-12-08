import React, {Component} from 'react';

class FilmsSection extends Component {
    constructor() {
        super();
        this.state = {
            films:[]
        };
    }
    componentDidMOunt() {
        this.setState({films: this.props.films})
}
 render () {
     return (
         <div className="films-section">
         {this.state.films? this.state.films.map((film,i) => (
            <div className="films" key={i}>
            <div className="film-list">
            <p> Appears in : </p>
            <ul>{film.films}</ul></div>
            </div>)
         ) : null}
            </div>
        );
    }
}
export default FilmsSection;