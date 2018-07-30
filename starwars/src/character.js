import react from 'react';

const character = () => {
    return (
        <p>
            name: {props.name};
            eye color: {props.eye_color};
            gender: {props.gender};
            hair color : {props.hair_color};
            height: {props.height};
    )
}

export default character;