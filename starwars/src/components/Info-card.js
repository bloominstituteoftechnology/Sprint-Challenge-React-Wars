import React from "react"

const infoCard = props => {

    return (
        <div className="soldCard">
            <h2>Star Wars Characters</h2>
                <ul>
                    Name:{props.soldier.name}
                    Height:{props.soldier.height}
                    Mass:{props.soldier.mass}
                </ul>
        </div>
    )
}

export default infoCard