import React from 'react';
import styled from 'styled-components';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

export default CharSearch;

const SInputGroup = styled(InputGroup)`
  width: 90%;
`;

function CharSearch(props) {

  return (
    <SInputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="search" />
    </SInputGroup>
  )

}