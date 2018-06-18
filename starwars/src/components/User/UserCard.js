import React from 'react';
import UserDetails from './UserDetails';
import UserImage from './UserImage';

const UserCard = (props) => {
    return (

        <div className = 'user-card'>
            <UserImage
             {...props} />
            {props.name}, {props.gender}
        </div>
    );
};

export default UserCard;