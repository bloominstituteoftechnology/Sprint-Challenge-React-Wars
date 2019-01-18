import React from "react"
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'

const styles = {
 card: {
  maxWidth: 225
 }
}
class StarWarsCard extends React.Component {
 render() {
  const { classes } = this.props ;
  let starArr = []
  let replacer = (key, value) => {
   if (!(Array.isArray(value))) {
    return key ;
   }
   else if (Array.isArray(value)) { 
     return starArr.concat(value);
   }
  }

  return(
   <div>
    <Card className={classes.card}>
     <CardContent>
      <Typography>
       {this.props.character.name}
      </Typography>
      <Typography>
       {this.props.character.gender}
      </Typography>
      <Typography>
       {this.props.character.height}
      </Typography>
      {JSON.stringify(`${this.props.character}`, replacer)}
     </CardContent>
    </Card>
   </div>
  )
 }
}



export default withStyles(styles)(StarWarsCard) ;