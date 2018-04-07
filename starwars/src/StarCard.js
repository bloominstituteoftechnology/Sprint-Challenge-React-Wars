import React from 'react';
import Films from './Films.js'
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
  
  const StarCard = (props) => {
    return (
      <div>
          {props.starChars.map(starChar =>(
        <Card className='starcards'>
          <CardBody className='cardinner'>
              <img className='greensaber' src="https://i.imgur.com/xTHn4aL.png" />
            <CardTitle className='char-name'>{starChar.name}</CardTitle>
            <img className='redsaber' src="https://i.imgur.com/TwZgZVc.png" />
            <CardSubtitle></CardSubtitle>
          </CardBody>
          
          <CardBody className='cardbottom'>
          <Table className='table'>
        <thead>
          <tr className='toprow'>
            <th className='info'>Gender</th>
            <th className='info'>Birth Year</th>
            <th className='info'>Skin Color</th>
            <th className='info'>Height</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          <tr className='rowtwo'>
            <td className='info'>{starChar.gender}</td>
            <td className='info'>{starChar.birth_year}</td>
            <td className='info'>{starChar.skin_color}</td>
            <td className='info'>{starChar.height} cm</td>
            <td>{starChar.eye_color}</td>
          </tr>

        </tbody>
      </Table> 
      <Button className='buttontwo' color="link"><img className='button-two' src="https://vignette.wikia.nocookie.net/emoticon/images/f/f5/Jar-Jar-Binks-1.png/revision/latest?cb=20150704200134" /><p className='button-text-two'>This Is Not The Droid You Are Looking For</p> </Button>
      <Button className='buttonone' color="link"><img className='button-one' src="http://files.softicons.com/download/tv-movie-icons/star-wars-characters-icons-by-jonathan-rey/png/256x256/Han%20Solo%20-%2002.png" /><p className='button-text-one'>May The Force Be With You</p></Button>
          </CardBody>
        </Card>
          ))};
      </div>
    );
  };
  
  export default StarCard;