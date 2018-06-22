import React from 'react';

const UserImage = (props) => {
    return (
        <div>
          
        <img
        className = 'profile-image hidden'
        src = {'./img/' + props.name + '.jpg'}
        />
        </div>
    );
};

export default UserImage;