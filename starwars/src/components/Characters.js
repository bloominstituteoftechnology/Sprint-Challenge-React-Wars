// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import urls from '../index'


const Div = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
justify-content: center;
margin: auto 0
width: 100%;
`
const StyledDiv = styled.div`
width: 20em;
border: 2px solid gray;
border-radius: 10px;
margin: 2vh 2vh;
background-color: #e6d3a1;
`
const StyledImg = styled.img`
border: 1px solid black;
width: 200px;
height: 275px;
margin: 0vh 0vh 4vh;
box-shadow: 0 10px 20px 2px #ad985f;
border-radius: 6px
`

const Character = (props) => {
    return (
        <Div>
            {props.data.map((item, index) => {
                return (
                    <StyledDiv key={index}>
                        <h2>{item.name}</h2>
                        <h3>{item.starships.map((ships) => { return (console.log(ships)) })}</h3>
                        <StyledImg alt='SW Peopel' src={urls[index]} />
                    </StyledDiv>
                )
            })}
        </Div >
    )
}

export default Character