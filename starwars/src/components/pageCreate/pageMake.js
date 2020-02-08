import React from "react";
import {CardContainer} from '../characterCardCreate/cardStyle'
import CardCreate from '../characterCardCreate/characterCreate'


//declaring function PageCreate passin
const PageCreate = () => {
  //checking to make sure targeting works

//returning desired result
  return(
    //passing data through props targeting to fill in information.
    <CardContainer>
      <CardCreate></CardCreate>
    </CardContainer>
  )
};
//exporting PageCreate to be used in dataGet.js, but completed.
export default PageCreate;
