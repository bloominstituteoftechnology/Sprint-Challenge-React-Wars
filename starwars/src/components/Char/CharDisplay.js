import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Row, Collapse } from 'reactstrap';

import CharCard from './CharCard';

export default CharDisplay;

//styles

const SRow = styled(Row)`

`;

function CharDisplay({data, i, current, search}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    if (search) {
      setIsOpen(false);
    } else if(parseInt(i) === parseInt(current)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [current, search])

  return (
    <Collapse isOpen={isOpen}>
      <SRow>
        {

          data.map((d, i) => {
            return <CharCard character={d} key={i} />
          })

        }


      </SRow>
    </Collapse>
  )
}