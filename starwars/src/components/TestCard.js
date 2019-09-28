import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Image } from 'semantic-ui-react'
import Name1 from './Name'
import Name2 from './Name2'
import DOB from './DOB'
import DOB2 from './DOB2'
import MiscIdentifires from './MiscIdentifiers'
// import 'semantic-ui-css/semantic.min.css'




const TestCard = () => (
  <Card>
    <Card.Content>
      <Card.Header><Name1/></Card.Header>
      <Card.Meta>
        <span className='date'>Year Born: <DOB2 /></span>
      </Card.Meta>
      {/* <Card.Description>

      </Card.Description> */}
    </Card.Content>
    <Card.Content extra>
    <MiscIdentifires/>
    </Card.Content>
  </Card>
)

export default TestCard