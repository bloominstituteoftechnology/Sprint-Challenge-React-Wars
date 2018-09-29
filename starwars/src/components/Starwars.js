import React from "react"



export class Starwars extends React.Component {

render() {
return (

<div className="card-content">
    <img src="https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xNzkvMDkyL2kwMi9TVEFSV0FSUy1DTEFTU0lGSUVELmpwZw==" alt="" />

    <h1>Starwars</h1>
    <h2>Character: {this.props.chars.name}</h2>
    <p>Skin: {this.props.chars.skin_color} {' '}</p>
        <p>Eye Color: {this.props.chars.eye_color}{' '} </p>
        <p>Hair: {this.props.chars.hair_color}{''}</p>
        <p>Height: {this.props.chars.height}{' '}</p>
        <p>Birthday: {this.props.chars.birth_year}{' '}</p>
        <p>Weight: {this.props.chars.mass} {' '} </p>

       
</div>

)
}
}
