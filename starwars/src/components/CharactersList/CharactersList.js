import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

export default function(props) {
    const [data] = useState(Array.from(props.data));
    return(
        <Grid>
            <Grid.Column>
                {data.map(character => {
                    return <h2>{character.name}</h2>
                })}
            </Grid.Column>
        </Grid>
    )
}