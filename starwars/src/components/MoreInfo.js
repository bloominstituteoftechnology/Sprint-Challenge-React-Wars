// import React, { useState } from 'react';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';

// const MoreInfo = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
//       <Collapse isOpen={isOpen}>
//         <Card>
//           <CardBody>
//             <p>Eye Color: {props.character.eye_color}</p>
//             <p>Mass: {props.character.mass}</p>
//             <p>Skin Color: {props.character.skin_color}</p>
//           </CardBody>
//         </Card>
//       </Collapse>
//     </div>
//   );
// }

// export default MoreInfo;