import React from "react"
import { 
 GridList, 
 GridListTile, 
 GridListTileBar,
 Card, 
 ListSubheader, 
 IconButton, 
 InfoIcon,
withStyles } from '@material-ui/core'

const styles = {
 card: {
  maxWidth: 225,
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
  fontSize: 20
 },
 subTypography: {
  fontStyle: 'italics',
  fontSize: 18
 }
}

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
  maxWidth: 225,
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
  fontSize: 20
 },
 subTypography: {
  fontStyle: 'italics',
  fontSize: 18
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

  // return(
  //   <Card className={classes.card}>
  //    <CardContent>
  //     <Typography className={classes.typography} variant='h2'>
  //      {this.props.character.name}
  //     </Typography>
  //    </CardContent>
  //    <Typography className={classes.typography}>
  //     {this.props.character.gender}
  //    </Typography>
  //    <Typography className={classes.typography}>
  //    <Typography className={classes.subTypography} >
  //     Height: {this.props.character.height}
  //    </Typography>
      
  //     Mass: {this.props.character.mass} {' '}
  //     Eye Color: {this.props.character.eye_color} {' '}
  //     Last Edited: {this.props.character.edited}
  //    </Typography>
  //    {JSON.stringify(`${this.props.character}`, replacer)}
  //   </Card>
  // )
  return (
  <div className={classes.root}>
   <GridList cellHeight={220} className={classes.gridList}>
   <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
   <ListSubheader component="div" className={classes.typography}>Name: {this.props.character.name}</ListSubheader>
   </GridListTile>
   <GridListTile>
   <ListSubheader className={classes.typography}>Last Edited:{this.props.character.edited}</ListSubheader>
   <ListSubheader className={classes.typography}>Mass: {this.props.character.mass}</ListSubheader>
   </GridListTile>
   <GridListTile>  
   <GridListTileBar title={this.props.character.hair_color}/>
   {this.props.character.vehicles.map((vehicle, index) => <GridListTileBar title={vehicle.vehicle} ></GridListTileBar>)}
   </GridListTile>
   </GridList>
  </div>
  )
 }
}



export default withStyles(style)(StarWarsCard) ;