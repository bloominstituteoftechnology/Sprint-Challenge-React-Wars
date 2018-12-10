import React from "react";
import Button from "./Button";

const Nav = (props) => {
    return (
        <section className="navigation">
            <Button name="previous" content="previous" action={props.previous}/>
            <Button name="next" content="next" action={props.next}/>
        </section>
    );
}

export default Nav;