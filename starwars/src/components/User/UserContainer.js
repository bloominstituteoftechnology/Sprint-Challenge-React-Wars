import React from 'react';
import UserImage from './UserImage';
import './user.css';
import UserDetails from './UserDetails';

const UserContainer = (props) => {
    return (
        <div>
            <UserImage imageSource = './img/lukeskywalker.jpg' />
            <UserDetails />
        </div>
    );
};

export default UserContainer;