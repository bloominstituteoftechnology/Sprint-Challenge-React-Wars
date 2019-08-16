import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styled from "styled-components";



const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
);

const CardExampleCardProps = (props) => (
    <Card
        image="https://gamerheadquarters.com/sort/movies/starwars/starwars.jpg"
        header={props.name}
        meta={props.height}
        description={props.weight}
    />
);

export default CardExampleCardProps
