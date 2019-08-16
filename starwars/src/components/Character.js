import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Character = (props) => {
    const person = props.person

    return ( 
        <Card>
        {/* <Image src={`https://picsum.photos/200?random=${props.index}`} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>Born in {person.birth_year}</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {`Appeared in ${props.person.films.length} film\(s\)`}
          </a>
        </Card.Content>
      </Card>
     );
}
 
export default Character;