import React from 'react';
import UserCard from './UserCard';
import UserImage from './UserImage';
import UserDetails from './UserDetails';
import './user.css';

const UserContainer = (props) => {
    return (
        <div>
                {props.characters.map((char, index) => {
                    return <UserCard {...char} />
                })}
                
</div>
            )}; 
export default UserContainer;