import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';

import InfoCard from './InfoCard';

export default CharSearch;

const SInputGroup = styled(InputGroup)`
  width: 90%;
`;

function CharSearch({name, setName, data}) {
//names should be an array with objects containing 3 properties: name, page, index

//match search with api data logic below, incomplete
  function checkData(person) {
    data.forEach((d, pg) => {
      
      d.forEach((item, i) => {
         if(person.toLowerCase() === item.name.toLowerCase()) {
           setName({name: person, page: pg, index: i})
         }
      })
    })
  }

  useEffect(() => {
    checkData("luke skywalker");
    console.log(name);
    console.log(name.name);
  }, []);
  return (
    <>
    <SInputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="search" />
    </SInputGroup>
    <InfoCard />
    </>
  )

}