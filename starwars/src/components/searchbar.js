import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Searchbar = ({ activateSearch, setSearch, setGender }) => {
  return (
    <Form>
      <FormGroup>
        <Label className="searchbar" for="name">Search</Label>
        <Input 
          onKeyDown={(e) => { e.key ==='Enter' && activateSearch(e) }} 
          id="name" 
          placeholder="input name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label className="searchbar" for="gender">Select Gender</Label>
        <Input type="select" name="select" id="gender" onChange={(e) => {setGender(e.target.value)}}>
          <option>Male</option>
          <option>Female</option>
          <option>N/A</option>
        </Input>
      </FormGroup>
    </Form>
  );
}

export default Searchbar;