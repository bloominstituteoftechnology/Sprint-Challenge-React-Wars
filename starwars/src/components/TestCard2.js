import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Name2 from './Name2'
import DOB from './DOB'
import MiscIdentifires2 from './MiscIdentifiers2'
import 'semantic-ui-css/semantic.min.css'



const TestCard = () => (
  <Card>
    <Card.Content>
      <Card.Header><Name2/></Card.Header>
      <Card.Meta>
        <span className='date'>Year Born: <DOB /></span>
      </Card.Meta>
      {/* <Card.Description>

      </Card.Description> */}
    </Card.Content>
    <Card.Content extra>
    <MiscIdentifires2/>
    </Card.Content>
  </Card>
)

export default TestCard