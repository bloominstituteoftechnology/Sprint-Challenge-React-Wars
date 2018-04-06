import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CharList = props => {
    return (
        <div className="character-wrapper">
        {props.starwarsChars.map((char, index) => (
            <Card>
                <CardBody key={index + char.name}>
                    <CardTitle>{char.name}</CardTitle>
                    <CardSubtitle style={{marginBottom: '0.5em'}}>{`Gender:----${char.gender.toUpperCase()}----`}</CardSubtitle>
                    <CardSubtitle style={{ marginBottom: '0.5em' }}>{`Birth Year:----${char.birth_year}----`}</CardSubtitle>
                    <CardSubtitle style={{ marginBottom: '0.5em' }}>{`Eye Color:----${char.eye_color.toUpperCase()}----`}</CardSubtitle>
                    <CardSubtitle style={{ marginBottom: '0.5em' }}>{`Hair Color:----${char.hair_color.toUpperCase()}----`}</CardSubtitle>
                    <CardSubtitle>{`Height:----${char.height}cm----`}</CardSubtitle>
                </CardBody>
            </Card>
        ))}
        </div>
    )
}

export default CharList;