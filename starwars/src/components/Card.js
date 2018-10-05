import React from 'react'
import CardContent from './CardContent'
import './StarWars.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log('this.state inside app.js', this.state.starwarsChars,);
        console.log(`char info is ${this.props.charInfo.name}`)
        return (
            <div className='cards'>
                <CardContent
                    details={this.props.charInfo} 
                />
            </div>
        )
    }
}

export default Card;