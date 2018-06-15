import React from 'react'
import Eye from './Eye'
import color from '../utils/color'
import MaleIcon from './MaleIcon'
import FemaleIcon from './FemaleIcon'
import './StarWars.css'

class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
        this.genderComponent = props.char.gender === 'male' ? <MaleIcon />
                                                            : <FemaleIcon />
    }

    render () {
        return (
            <div className="character-card"> 
                <h1 className="character-name">{this.props.char.name}</h1>
                <Eye color={color(this.props.char.eye_color)} />
                {this.genderComponent}
            </div>
        )
    }
}



export default CharacterCard