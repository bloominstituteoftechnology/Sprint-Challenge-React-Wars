import React from "react"
import { Card, CardContent, Typography } from '@material-ui/core'

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
         <Card>
          <CardContent>
           <Typography>
            {this.props.character.name}
           </Typography>
           {this.props.character.gender}
           {this.props.character.height}
           {JSON.stringify(`${this.props.character}`, replacer)}
          </CardContent>
         </Card>
        </div>
    )
// }
    }
}



export default StarWarsCard ;