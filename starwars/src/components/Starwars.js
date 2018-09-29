import React from "react"
import { StarwarsCard } from './StarwarsCard'


export class Starwars extends React.Component {

    render() {
        return (

                <StarwarsCard  chars={this.props.chars} key={this.props.id}/>


        )
    }
}

