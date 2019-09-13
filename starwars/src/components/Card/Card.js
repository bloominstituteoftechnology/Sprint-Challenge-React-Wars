import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import img from "./yoda.png"

const useStyles = makeStyles(
    createStyles({
        card: {
            minWidth: 200,
            maxWidth: 300,
            minHeight: 360,
            maxHeight: 375,
        },
        media:{
            // maxWidth: 140,
            // margin: 'auto',
            height: 240,

        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    }),
);

export default function SimpleCard({ name,  birthYear, gender}) {
    const classes = useStyles();
    return (
    <Card className={classes.card}>
        <CardActionArea>
        <CardMedia className = {classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
        />
        <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>  </Typography>
            <Typography variant="h5" component="h2"> Name: {name} </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Year of birth: {birthYear} <br/>
                Gender :    {gender}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
);
}