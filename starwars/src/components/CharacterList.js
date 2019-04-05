import React from 'react';
import './StarWars.css';
import CharacterCard from './CharacterCard'

class CharacterList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    handleCharacters = () => {
        this.props.characters.map(character => {
            return this.setState({[character.name]:character});      
        });
        document.querySelector('button').style.display = 'none';
        document.querySelector('.characterCards').style.display = 'flex';
    };
    render(){
        return(
            <div>
                <button onClick={this.handleCharacters}>Click to see Star Wars Characters!</button>
                   <div className="characterCards">
                   <CharacterCard character ={this.props.characters} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   {/* <CharacterCard character ={props.characters['Biggs Darklighter']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['C-3PO']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['Darth Vader']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['Leia Organa']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['Luke Skywalker']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['Obi-Wan Kenobi']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['Owen Lars']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['R2-D2']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/>
                   <CharacterCard character ={props.characters['R5-D4']} pic = "https://vignette.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest?cb=20180123070942"/> */}
                   </div> 
            </div> 
        );
    }
}

export default CharacterList;