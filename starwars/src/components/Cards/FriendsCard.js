import React from 'react';
import CharacterList from '../Characters/CharacterList';


const FriendsCard = props => {
    return (
        <div>
        <CharacterList list={props.list} selected={props.selected} pic={props.pic} />
        </div>
    )
}

export default FriendsCard;