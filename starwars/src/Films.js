import React, { Component } from 'react';



const Films = props => {
    return (
        
        <div>
        <h3>Films</h3>
        {props.films.map((f) => (
            <div>{f}</div>
        ))}</div>
    )
}





// class BioData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             starwarsChars: []
//         }
//     }
   

//     render() {
//         return (
//             <div></div>
//         )
//     }
// }






export default Films;