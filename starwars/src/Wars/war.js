import React from 'react';
import  Star from './Stars';

import './war.css';

const War = ({ war }) => {
    return (
        <div className="War-Card">
            <p>
                {friend.first_name} {friend.last_name}
            </p>
            <p>{friend.gender}</p>
            <p>{friend.email}</p>
            <p>{friend.occupation}</p>
        </div>
    );
};
// ANY time you're creating a child component that will reliant on specific data
// USE PROPTYPES
Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        occupation: PropTypes.string.isRequired,
        friends: PropTypes.arrayOf(
            PropTypes.shape({
                firstName: PropTypes.string,
                lastName: PropTypes.string
            })
        )
    })
};

export default Friend;
