import React from 'react';
import Character from '../components/Character';
import {Grid} from 'semantic-ui-react'

const CharacterList = ({characters}) => {
    return (
        <Grid container divided centered>
            {characters.map((char, i) => <Character character={char} key={i} />)}
        </Grid>
    );
};

export default CharacterList;