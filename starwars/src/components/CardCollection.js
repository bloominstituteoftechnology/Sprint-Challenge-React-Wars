import React from "react";

import Card from "./Card";

const CardCollection = props => {
    return (
        <section className="allCards">
            {props.info.map((card, i) =>
                <Card item={card} current={i === props.currentIdx} />
            )}
        </section>
    );
}

export default CardCollection;