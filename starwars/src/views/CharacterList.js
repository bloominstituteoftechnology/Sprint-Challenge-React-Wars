import React from "react";
import Character from "../components/Character";
import { Grid, Dimmer, Loader } from "semantic-ui-react";

const CharacterList = ({ characters, loading }) => {
  return (
    <>
      {loading ? (
        <Dimmer active={loading}>
          <Loader size="huge">Loading</Loader>
        </Dimmer>
      ) : (
        <Grid container divided centered>
          {characters.map((char, i) => (
            <Character character={char} key={i} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default CharacterList;
