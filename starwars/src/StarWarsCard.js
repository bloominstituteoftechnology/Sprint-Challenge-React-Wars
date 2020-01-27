import React, { useEffect, useState } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col, Button } from "reactstrap";
import axios from 'axios';

export default function StarWarsCard(props) {

    const [films, setFilms] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promiseArray = props.films.map(url=> axios.get(url))
        Promise.all( promiseArray )
            .then(res => {
                const filmDescriptions = res.map(film => film.data)
                setFilms(filmDescriptions)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    },[props.films])

    // Get Films using async/await

    // useEffect(() => {
    //     async function getFilms() {
    //         const promiseArray = props.films.map(url=>axios.get(url));
    //         try {
    //             const filmDescriptions = (
    //                 await Promise.all(promiseArray)
    //               ).map(res=>res.data)
    //               setFilms(filmDescriptions)
    //         } catch(err) {
    //             console.log(err)
    //         }
    //     }

    //     getFilms()
    // }, [props.films])

    return(
        <Col xs='6' lg='4'>
            <Card height='100%' body outline color = 'success'  className='text-left'>
                <CardBody height='100%'>
                    <CardTitle className='text-center'>{props.name}</CardTitle>
                    <CardSubtitle className='text-center'>{props.gender}</CardSubtitle>
                    <hr />
                    <CardText>Birth Year: {props.birthYear}</CardText>
                    <CardText>Eye Color: {props.eyes}</CardText>
                    <CardText>Hair Color: {props.hair}</CardText>
                    <CardText>Films: {loading ? 'Loading' : films && films.map(film => ` ${film.title} |`)}</CardText>
                    <Button className='text-left'>More</Button>
                </CardBody>
            </Card>
        
        </Col>
    )
}