import React from 'react';
import './StarWars.css';

function Name (props) {
        let a = Object.keys(props.char);
        let b = Object.values(props.char);
        let c = [];
        for (let i = 0; i < a.length; i++) {
            c.push (<p> {a[i]}: {b[i]}</p>)
        }
        return c;

    }

export default Name;