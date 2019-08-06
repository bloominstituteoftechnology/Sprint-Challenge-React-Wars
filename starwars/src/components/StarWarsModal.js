import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const StarWarsModal = (props) => (
  <Modal trigger={<Button>{props.starWar.name}</Button>}>
    <Modal.Header>{props.starWar.name}</Modal.Header>
    <Modal.Content image>
      {/* <Image wrapped size='medium' src='' /> */}
      <Modal.Description>
        <p>{`Birth Year: ${props.starWar.birth_year}`}</p>
        <p>{`Eye Color: ${props.starWar.eye_color}`}</p>
        <p>{`Hair Color: ${props.starWar.hair_color}`}</p>
        <p>{`Films: ${props.starWar.films}`}</p>
        <p>{`Gender : ${props.starWar.gender}`}</p>
        <p>{`Height: ${props.starWar.height}`}</p>
        <p>{`Mass: ${props.starWar.mass}`}</p>
        <p>{`Language: ${props.starWar.languge}`}</p>

        <h3>More Info</h3>
        <p>{`Films: ${props.starWar.films}`}</p>
        <p><a href={`https://www.google.com/search?q=${props.starWar.name}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjLne7J2ezjAhVHnp4KHX4kDqkQ_AUIESgB&biw=1440&bih=797`}>{props.starWar.name} images</a></p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default StarWarsModal;