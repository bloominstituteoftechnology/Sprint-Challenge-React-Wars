import React from 'react'
import Character from './Character'


class CharacterList extends React.Component {
  render() {
    return this.props.grabResultsArray.map((e) => {
      return (
        <div>
            <ul>
                <li>
                    <a> 
                    <Character key={e.created} 
                      characterName={e.name} 
                      birthdate={e.birth_year} 
                      gender={e.gender}
                      height={e.height}
                      mass={e.mass}
                      eye={e.eye_color}
                      hair={e.hair_color}
                      skin={e.skin_color}
                      
                    />
                    </a>
                </li>
            </ul>
        </div>
      )
    });
  }
}

export default CharacterList