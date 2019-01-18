import React from "react"
import StarWarsCard from "./StarWarsCard";
import { Paper, withStyles } from "@material-ui/core" ;

const styles = {
 paper: {
  maxWidth: '90%',
  minWidth: 600,
  height: '100%',
  // display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
 },
 div: {
  display: 'flex',
  justifyContent: 'center',
  border: '2px solid black',
  height: '100%'
 },
 card: {
  marginBottom: 20
 }
}
class StarWarsContainer extends React.Component {
    render(){
     const { classes } = this.props
    return (
        <div className={classes.div}>
         <Paper className={classes.paper}>
          {this.props.starwarsChars.map(character =>
            <StarWarsCard
              character={character}
              key={character.name} />)}
            </Paper>
        </div>
      );

    }

}



export default withStyles(styles)(StarWarsContainer) ;