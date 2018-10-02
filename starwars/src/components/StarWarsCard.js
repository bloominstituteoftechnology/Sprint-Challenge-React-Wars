import React from "react"

// class StarWarsCard extends React.Component{


//     render(){
//         return(
//             <div>
//             <p>{this.props.starwarsChars}</p>
//             </div>
//         )
//     }
// }

class StarWarsCard extends React.Component {
    render(){
        // const StarWarsCard = (props) => {
            let starArr = []
            let replacer = (key, value) => {
                if (!(Array.isArray(value))) {
                  return key ;
                 
                }
               else if (Array.isArray(value)) { return starArr.concat(value);}
                console.log(starArr)
              }
              
    return(
        <div>
        <div>{this.props.character.gender}
        {this.props.character.name}
        {this.props.character.height}
        {JSON.stringify(`${this.props.character}`, replacer)}
        </div>
        </div>
    )
// }
    }
}



export default StarWarsCard ;