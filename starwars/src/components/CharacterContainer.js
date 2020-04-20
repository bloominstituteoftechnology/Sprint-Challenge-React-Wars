import React from 'react';
import { Card, Name, Status, Species, Photo, Gender } from "./Styles.js"

const CharacterContainer = (props) => {
    //console.log(character);

    return (
        <Card>
            <Photo src = {props.image} alt="Rick and Morty Characters" />
            <Name>{props.name}</Name>
            <Status>{props.status}</Status>
            <Species>{props.species}</Species>
            <Gender>{props.gender}</Gender>
        </Card>
    );
};

export default CharacterContainer;