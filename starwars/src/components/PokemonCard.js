import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

function PokemonCard(props) {

    // Well, I tried something genius. It didn't work. lol
    // The idea is to insert Row and Col components only at the beginning of each row with 3 cards per row.
    // Maybe the amazing Cori has a solution.
    // for(let i = 0; i < props.length; i++) {
    //     let modulus = i % 3;
    //     if(modulus === 1) {
    //         document.createElement('Row')
    //         document.createElement('Col')
    //         document.getElementById(props.card.id).prepend('Row')
    //         document.getElementById(props.card.id).prepend('col')
    //     }
    // }

    return (
            <div id={props.card.id}>
                <Card style={{width:"25%"}}>
                    <CardBody>
                    <CardTitle>{props.card.name}</CardTitle>

                        {(props.card.rarity === 'Uncommon')
                            ? <CardSubtitle>{props.card.rarity}</CardSubtitle>
                            : (props.card.rarity === 'Common')
                            ? <CardSubtitle>{props.card.rarity}</CardSubtitle>
                            : <CardSubtitle>{props.card.rarity}</CardSubtitle>
                        }
                            <CardImg src={props.card.imageUrl} alt={props.card.name + ' Pokemon Card'} />
                </CardBody>
            </Card>
        </div>
    );
}

export default PokemonCard;