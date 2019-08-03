import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import CharacterCard from './CharacterCard';

export default function(props) {
    return(
        <Grid>
            <Grid.Column>
                {!props.isLoading? 
                    props.data.map(character => {
                        return <CharacterCard character={character} />
                    }) : null
                }
            </Grid.Column>
        </Grid>
    )
}