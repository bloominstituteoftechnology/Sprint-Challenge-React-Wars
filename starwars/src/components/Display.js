import React from 'react'
import CharacterList from './CharacterList'

const Display = props => {
  return (
    <div className = 'characterCard'>
      {props.characters.map(character => (
        <CharacterList profile={character} />
      ))}
    </div>
  )
}

export default Display