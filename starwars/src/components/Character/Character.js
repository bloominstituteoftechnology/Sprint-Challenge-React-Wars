import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlexColumn, FlexRow} from "../Elements/Flex";
import styled from 'styled-components'
import date from 'date-and-time'

const Card = styled.div`
    box-shadow: 1px 1px 34px #00000038;
    border-radius: 5px;
    min-height: 300px;
    width: 500px;
    padding: 20px;
    background: white;
    margin: 20px;
`;

const Name = styled.h2`
    margin-top: 0;
`;

const Span = styled.span`
    text-align: left;
    width: 260px;
`;

const B = styled.b`
    width: 200px;
    text-align: left;
`;

const Row = styled(FlexRow)`
    margin-top: 10px;
`;

const Character = ({character}) => {
    this.showComma = (i, a) => {
        return i === a.length - 1 ? "" : ", "
    };

    return (
        <Card>
            <FlexColumn>
                <Name>{character.name}</Name>
                <Row><B>Created at:</B>&nbsp;
                    <span>{date.format(new Date(character.created), 'MM/DD/YYYY')}</span></Row>
                <Row><B>Homeworld:</B>&nbsp;<span>{character.homeworld.name}</span></Row>
                <Row><B>Birth Year:</B>&nbsp;<span>{character.birth_year}</span></Row>
                <Row><B>Gender:</B>&nbsp;<span>{character.gender}</span></Row>
                <Row><B>Height:</B>&nbsp;<span>{character.height}</span></Row>
                <Row><B>Eye Color:</B>&nbsp;<span>{character.eye_color}</span></Row>
                <Row><B>Hair Color:</B>&nbsp;<span>{character.hair_color}</span></Row>
                <Row><B>Skin Color:</B>&nbsp;<span>{character.skin_color}</span></Row>
                <Row><B>Mass:</B>&nbsp;<span>{character.mass}</span></Row>
                <Row><B>Films:</B>&nbsp;<Span>{character.films.map((f, i, a) => `${f.title}${this.showComma(i, a)}`)}</Span></Row>
                <Row><B>Species:</B>&nbsp;<span>{character.birth_year}</span></Row>
                <Row><B>Starships:</B>&nbsp;<Span>{character.starships.map((s, i, a) => `${s.name}${this.showComma(i, a)}`)}</Span></Row>
                <Row><B>Vehicles:</B>&nbsp;<Span>{character.vehicles.map((v, i, a) => `${v.name}${this.showComma(i, a)}`)}</Span></Row>
            </FlexColumn>
        </Card>
    );
};

Character.propTypes = {
    character: PropTypes.object
};

export default Character;
