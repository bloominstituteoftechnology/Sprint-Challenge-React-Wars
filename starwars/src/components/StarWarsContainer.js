import React from "react"
import StarWarsCard from "./StarWarsCard";
import { Paper, withStyles } from "@material-ui/core" ;

const styles = {
 paper: {
  maxWidth: 450 
 },
 div : {
  display: 'flex',
  justifyContent: 'center'
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