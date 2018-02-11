import React from 'react';
import Card from './CardComp';
import styled  from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const CardsContainer = styled.div`
    border:none;
    margin-top:15px;
    max-width:1200px;
    margin:10px auto;

`;

class Cards extends React.Component {

    render() {
        return (
            <CardsContainer>
                <Grid>
                    <Row>
                        {this.props.cards.starwarsChars.map((card,i) => {
                            return  <Col md={4} key={i} ><Card card={card} /></Col>
                        })}
                    </Row>
                </Grid>
            </CardsContainer>
        );
    }

}

export default Cards;
