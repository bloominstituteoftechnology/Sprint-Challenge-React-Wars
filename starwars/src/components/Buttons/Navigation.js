import React from 'react';
import Button from './Button';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <section className="navigation">
            <Button name="previous" content="⥢ " action={props.previous}/>
            <h1 className="Header">React Wars</h1>
            <Button name="next" content=" ⥤" action={props.next}/>
        </section>
    );
}

export default Navigation;