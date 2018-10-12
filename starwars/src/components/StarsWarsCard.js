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
        // isCollapse = false;
        // console.log("working", isCollapse); 
        this.props.card(this.props.index)
    }

    render(){
        return(
            <div>
                <h1 onClick={() => this.helper()}>{this.props.characters.name}</h1>
                {this.state.isCollapse ? null : 
                <div className={this.props.characters.style}>
                    <p>Birth Year: {this.props.characters.birth_year}</p>
                    <p>Gender: {this.props.characters.gender}</p>
                    <p>Height: {this.props.characters.height}</p>
                    <p>Mass: {this.props.characters.mass}</p>
                    <p>Hair Color: {this.props.characters.hair_color}</p>
                    <p>Eye Color:{this.props.characters.eye_color}</p>
                    {/* <p>Flims: {props.characters.films}</p> */}
                </div>
                }
            </div>
        )
    }
}


export default StarWarsChars;