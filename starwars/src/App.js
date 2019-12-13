import React from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import styled from "styled-components";

const Title = styled.h1`
color: black;
`;

const Box = styled.section`
margin: 3%;
text-align: center;
border: none;
box-shadow: 5px 10px gray;
border-radius: 10px;
display: flex;
width: 100%;
margin-bottom: 0;
margin-top: 4%;

`;

const Box2 = styled.div`
margin: 3%;
text-align: center;
display: flex;
justify-content: center;
margin-bottom: 0;
letter-spacing: .1rem;
`;

const App = () => {


  return (
    <div className="App">
      <Title>React Wars</Title>
      <Box2>
        <Form>
      <FormGroup>
        <Label for="Star-Wars-CheckBox">Search By:</Label>
        <Box>
          <CustomInput type="checkbox" id="exampleCustomCheckbox21"label="Name" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Gender" />
          <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Birth Year" disabled />
          <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Height" htmlFor="exampleCustomCheckbox4_X" disabled />
          <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Eye Color" htmlFor="exampleCustomCheckbox5" disabled />
          </Box>
      </FormGroup>
      </Form>


    </Box2>

   <CharacterCard />
 


    </div>



  );
}

export default App;
