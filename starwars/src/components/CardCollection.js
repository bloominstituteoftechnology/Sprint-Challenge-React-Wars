import React from "react";

import Card from "./Card";

const CardCollection = props => {
    return (
        <section className="allCards">
            {props.info.map(card =>
                <Card item={card} />
            )}
        </section>
    );
}

export default CardCollection;