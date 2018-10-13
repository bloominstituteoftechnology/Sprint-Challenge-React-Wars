import React from 'react';

// const StarWarsChars = props => {
//     let isCollapse = true;

    
class StarWarsChars extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isCollapse: true
        }
    }

    helper = () => {
        this.setState({
            isCollapse: false
        })
        this.props.card(this.props.index)
    }

    render(){
        return(
            <div className="card-container">
                <h1 className="character-title" onClick={() => this.helper()}>{this.props.characters.name}</h1>
                {this.state.isCollapse ? null : 
                <div className={this.props.characters.style}>
                    <p className="char-attr"><span className="attr">Born: </span>{this.props.characters.birth_year}</p>
                    <p className="char-attr"><span className="attr">Gender:</span> {this.props.characters.gender}</p>
                    <p className="char-attr"><span className="attr">Height: </span>{this.props.characters.height}</p>
                    <p className="char-attr"><span className="attr">Mass/Weight: </span>{this.props.characters.mass}</p>
                    <p className="char-attr"><span className="attr">Hair Color: </span>{this.props.characters.hair_color}</p>
                    <p className="char-attr"><span className="attr">Eye Color:</span>{this.props.characters.eye_color}</p>
                    <p className="char-attr"><span className="attr">Skin Color:</span>{this.props.characters.skin_color}</p>
                </div>
                }
            </div>
        )
    }
}


export default StarWarsChars;