import React, {useState} from 'react';
import {Modal, Card} from 'reactstrap';

export default InfoCard;

function InfoCard() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal isOpen={isOpen}>
      <Card>

      </Card>
    </Modal>
  )



}