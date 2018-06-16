import React from 'react';

const UserImage = (props) => {
    return (
        <div>
        < img onClick = {
            props.logCharacters
        }
        className = 'profile-image'
        src = {props.imageSource}
        />
        </div>
    );
};

export default UserImage;