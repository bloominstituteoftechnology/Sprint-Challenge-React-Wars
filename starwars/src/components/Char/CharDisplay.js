import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

import CharCard from './CharCard';

export default CharDisplay;

//styles

const SRow = styled(Row)`

`;

function CharDisplay({data}) {

  return (
    <SRow>
  {  
    data.map((d, i) => {
      console.log(d, "mapped data");
      return <CharCard character={d} key={i} />
    })}

    </SRow>
  )
}