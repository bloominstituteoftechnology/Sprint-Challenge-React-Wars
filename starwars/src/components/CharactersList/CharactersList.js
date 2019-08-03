import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

export default function(props) {
    const [data] = useState(Array.from(props.data));
    console.log('CharactersList.js: ', props.data);
    return(
        <Grid>
            <Grid.Column>
                {!props.isLoading? 
                    props.data.map(character => {
                        return <h2>{character.name}</h2>
                    }) : null
                }
            </Grid.Column>
        </Grid>
    )
}