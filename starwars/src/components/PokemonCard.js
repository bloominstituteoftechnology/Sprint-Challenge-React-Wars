import React from 'react';

function PokemonCard(props) {

    return (
                <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-bottom uk-width-1-4">
                    <h3 className='uk-card-title'>{props.card.name}</h3>

                        {(props.card.rarity === 'Uncommon')
                            ? <div><span className='uk-text-success'>{props.card.rarity}</span></div>
                            : (props.card.rarity === 'Common')
                            ? <div><span className='uk-text-primary'>{props.card.rarity}</span></div>
                            : <div><span className='uk-text-danger uk-text-capitalize'>{props.card.rarity}</span></div>
                        }
                        <div className='uk-card-media-top'>
                            <img src={props.card.imageUrl} alt={props.card.name + ' Pokemon Card'} />
                        </div>
                </div>
    );
}

export default PokemonCard;