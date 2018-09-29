import React from "react"



export class Starwars extends React.Component {

    render() {
        return (
            <div>
                {this.props.chars.name}
            </div>
        )
    }
}

