import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./SwCard"
import "./App.css";
import { Container, Row } from "reactstrap";


export default function Swcards() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios
          .get(`https://swapi.co/api/people/`)
          .then(res => {
            const swChar = res.data.results;
            console.log(swChar);
            setCard(swChar);
          })
          .catch(err => console.log(`There error is: ${err}`));
          },[]);   

      return (
        <Container>
          <Row>
            {card.map(char => {
              return (
                <SwCard
                key={char.name}
                name={char.name}
                height={char.height}
                />
              );
            })}
          </Row>
        </Container>
      );
}




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SwCard from "./SwCard"
// import "./App.css";
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// // MaterialUI styling
// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));



// export default function Swcards() {
//   // MaterialUI styling
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const [card, setCard] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://swapi.co/api/people/`)
//       .then(res => {
//         const swChar = res.data.results;
//         console.log(swChar);
//         setCard(swChar);
//       })
//         .catch(err => console.log(`There error is: ${err}`));
//       },[]);   

//       return (
//         <Card>
//        {card.map(char => {
//           return (
//             <SwCard
//             key={char.name}
//             name={char.name}
//             height={char.height}
//             />
//           )})}
//         </Card>
//       )

//         // <Card className={classes.card}>
//         //   <CardHeader title={char.name} subheader="Height"/>
//         //     <CardContent>
//         //       <Typography variant="body2" color="textSecondary" component="p">
//         //         This impressive paella is a perfect party dish and a fun meal to cook together with your
//         //         guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         //       </Typography>
//         //     </CardContent>

//         //   <CardActions disableSpacing>
//         //     <IconButton
//         //       className={clsx(classes.expand, {
//         //         [classes.expandOpen]: expanded,
//         //       })}
//         //       onClick={handleExpandClick}
//         //       aria-expanded={expanded}
//         //       aria-label="show more"
//         //     >
//         //       <ExpandMoreIcon />
//         //     </IconButton>
//         //   </CardActions>

//         //   <Collapse in={expanded} timeout="auto" unmountOnExit>
//         //     <CardContent>
//         //       <Typography paragraph>Method:</Typography>
//         //       <Typography paragraph>
//         //         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//         //         minutes.
//         //       </Typography>
//         //     </CardContent>
//         //   </Collapse>
//         // </Card>




