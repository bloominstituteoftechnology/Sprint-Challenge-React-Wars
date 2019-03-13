import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';


const CharList = props => {
    return (
        <div className="character-wrapper">
            {props.starwarsChars.map((char, index) => (
                <Card style={{ width: '400px', marginBottom: "20px", boxShadow: "8px 8px 12px black", opacity: "0.8" }}>
                    <CardBody key={index + char.name}>
                        <CardTitle>{char.name}</CardTitle>
                        <CardSubtitle style={{ marginBottom: '10px' }}>{`Gender:----${char.gender.toUpperCase()}----`}</CardSubtitle>
                        <CardSubtitle style={{ marginBottom: '10px' }}>{`Birth Year:----${char.birth_year}----`}</CardSubtitle>
                        <CardSubtitle style={{ marginBottom: '10px' }}>{`Eye Color:----${char.eye_color.toUpperCase()}----`}</CardSubtitle>
                        <CardSubtitle style={{ marginBottom: '10px' }}>{`Hair Color:----${char.hair_color.toUpperCase()}----`}</CardSubtitle>
                        <CardSubtitle>{`Height:----${char.height}cm----`}</CardSubtitle>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default CharList;