// Write your Character component here
import React from 'react'
import * as strap from 'reactstrap'
import styled from 'styled-components'

const LiStyled = styled.li `
    list-style: none;
    margin:10px auto;
    font-family: 'Courgette', cursive;
    color:white;
    text-shadow: 0 0 2px whitesmoke;
    font-size: 1.2rem


`
const Name = styled.h2 `
    font-family: 'Bangers', cursive;
    color:white;

`

export default function Character(props) {
   
    return (
        <strap.Col xl='3'>
            <strap.Card className='card'>
                <strap.CardHeader>
                  <Name>  {props.props.name} </Name>
                    
                    </strap.CardHeader>
                <strap.CardImg src={props.props.image}>
            
                </strap.CardImg>
            
                <strap.CardBody className='text-center'>
                    <ul>
                    <LiStyled>
                        <strap.CardText>
                            {props.props.status}
                        </strap.CardText>
                    </LiStyled>
                        <LiStyled>
                            <strap.CardText>
                                Origin: {props.props.origin.name}
            
            
                            </strap.CardText>
                        </LiStyled>
            
                        <LiStyled>
                            <strap.CardText>
                                Location: {props.props.location.name}
            
                                
                            </strap.CardText>
                        </LiStyled>
            
                        <LiStyled>
                            <strap.CardText>
                                Species: {props.props.species}
                                
                            </strap.CardText>
                        </LiStyled>
            
                        
            
            
                    </ul>
            
                </strap.CardBody>
            </strap.Card>
        </strap.Col>
    )
}
