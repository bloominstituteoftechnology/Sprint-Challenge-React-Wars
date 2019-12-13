import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

import InfoCard from './InfoCard';

export default CharSearch;

const SInputGroup = styled(InputGroup)`
  width: 90%;
`;

function CharSearch({setSearch, setInput}) {
//names should be an array with objects containing 3 properties: name, page, index

//match search with api data logic below, incomplete

  const handleChange = (e) => {
    setSearch(true);
    setInput(e.target.value);
    if (e.target.value === "") {
      setSearch(false);
    }
  }

  return (
    <>
    <SInputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="search" onChange={handleChange} />
    </SInputGroup>
    <InfoCard />
    </>
  )

}