import React from "react";
import ReactDOM from "react-dom";
import Luke from "./LukeSkywalker";
import C3PO from "./C3PO";
import R2D2 from "./R2D2";
import DarthVader from "./DarthVader";
import Leia from "./LeiaOrgana";
import Owen from "./OwenLars";
import Beru from "./BeruLars";
import R5D4 from "./R5D4";
import Biggs from "./BiggsDarklighter";
import Obiwan from "./obiwankenobi";

const AllCharacters = () => {
  return (
    <div>
      <p>
        <Luke />
        <C3PO />
        <R2D2 />
        <DarthVader />
        <Leia />
        <Owen />
        <Beru />
        <R5D4 />
        <Biggs />
        <Obiwan />
      </p>
    </div>
  );
};

export default AllCharacters;
