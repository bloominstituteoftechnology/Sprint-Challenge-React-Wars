import React from "react";
import {CardContainer} from '../characterCardCreate/cardStyle'
import CardsCreate from '../characterCardCreate/characterCreate'


//declaring function PageCreate
const PageCreate = () => {


//returning desired result
  return(

  //returning completed cards
      <CardsCreate></CardsCreate>

  )
};
//exporting PageCreate to be used in dataGet.js, but completed.
export default PageCreate;
