import React from 'react';
import UserImage from './UserImage';
import UserDetails from './UserDetails';
import './user.css';

const UserContainer = (props) => {
    return (
        <div>
            <UserImage imageSource = './img/lukeskywalker.jpg' />
            {/* {props.characters.filter(character => {
             if(character.name === 'Luke Skywalker') {
             return <UserDetails name = {character.name} />
            }})
        } */}
        Luke SkyWalker
</div>
    )};
export default UserContainer;