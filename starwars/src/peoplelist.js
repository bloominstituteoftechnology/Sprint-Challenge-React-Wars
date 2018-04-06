import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


// for(let i = 0; i< props starwars.length; i++)

const PeopleList = props =>{

  return(
    <Row>
    {props.starwarsChars.map((person, i) =>

      <Col xs="3">
       <Card key = {i + 1}>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>{person.name}</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>'Some quick example text to build on the card title and make up the bulk of the cards content'.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       </Col>

   )

 }</Row>)

}
// class PeopleList extends Component {
//   constructor(props){
//   super(props);
//     this.state ={
//       people: props.people
//     };
//   };
//   render(){
//       return( <div></div>);
//     }
// }

export default PeopleList;
