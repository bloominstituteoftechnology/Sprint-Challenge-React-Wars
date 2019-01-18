import React from "react"
import { Card, CardContent, Typography, withStyles } from '@material-ui/core'

const styles = {
 card: {
  maxWidth: 225,
  marginBottom: 25,
  border: '2px solid green',
  opacity: '0.8',
  background: 'DarkGray',
 },
 div: {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  border: '2px solid red'
 },
 typography : {
  color: 'black',
  fontSize: 16
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
   // <div className={classes.div} >
    <Card className={classes.card}>
     <CardContent>
      <Typography className={classes.typography}>
       {this.props.character.name}
      </Typography>
      <Typography className={classes.typography}>
       {this.props.character.gender}
      </Typography>
      <Typography>
       {this.props.character.height}
      </Typography>
      {JSON.stringify(`${this.props.character}`, replacer)}
     </CardContent>
    </Card>
   // </div>
  )
 }
}



export default withStyles(styles)(StarWarsCard) ;