import React from 'react';
import './user.css';

const UserDetails = (props) => (
    <div>
        < button onClick = {props.displayMyCharacter}> display </button>
    </div>
);

export default UserDetails;
