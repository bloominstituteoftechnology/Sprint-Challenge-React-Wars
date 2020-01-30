import React from "react";
import { Card, CardText, CardBody, CardTitle, Spinner} from "reactstrap";
import CharacterCard from "./components/CharacterCard";
export default function Reactstrap() {
  return (
    <div className="reactstap-container" style={{textAlign: 'center'}}>

    <Spinner type="grow" color="primary" />
    <Spinner color="danger" />
    <Spinner size="sm" color="success" style={{ width: '6rem', height: '10rem' }} />

    </div>
  );

}
