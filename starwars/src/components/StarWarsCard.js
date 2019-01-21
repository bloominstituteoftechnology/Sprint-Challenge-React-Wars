import React from "react"
import { 
 Card, 
 ListSubheader, 
 withStyles,
 Chip,
 Typography,
 CardContent,
 Divider
} from '@material-ui/core'

const style = {
 root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overFlow: 'hidden',
  border: '.75px solid black',
 },
 gridList: {
  width: 500,
  height: 450,
 },
 icon: {
  color: 'rgba(255, 255, 255, 0.54)'
 },
 card: {
  maxWidth: 400,
  marginBottom: 25,
  marginTop: 5,
  border: '2px solid black',
  opacity: '0.8',
  background: 'DarkGray',
 },
 div: {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  border: '2px solid red'
 },
 typography : {
  color: 'black',
  fontSize: 20,
  fontFamily: "Lobster"
 },
 subTypography: {
  fontStyle: 'italics',
  fontSize: 18,
  margin: 5,
 },
 barcodeFont: {
  fontFamily: 'Kamal',
  fontSize: 14
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
    <Card className={classes.card}>
     <CardContent>
      <Typography className={classes.typography} variant='h2'>
       {this.props.character.name}
      </Typography>
     </CardContent>
     <Typography className={classes.typography}>
      {this.props.character.gender}
     </Typography>
     <Typography className={classes.typography}>
     <Divider variant="middle" />
     <Typography className={classes.subTypography} >
      Height: {this.props.character.height}
     </Typography>
      
      <Typography className={classes.barcodeFont}>
       Mass: {this.props.character.mass}
      </Typography>
      <Chip label={`Eye Color: ${this.props.character.eye_color}`} /> {' '}
      <Chip className={classes.subTypography} label={`Last Edited: ${this.props.character.edited}`} />
      
     </Typography>
     {JSON.stringify(`${this.props.character}`, replacer)}
    </Card>
  )
 }
}



export default withStyles(style)(StarWarsCard) ;