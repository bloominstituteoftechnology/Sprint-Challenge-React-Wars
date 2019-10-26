import React from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import Pagination from '../Pagination/Pagination';

const ContentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 38em;
min-width: 80vw;
padding-bottom: 15%;
overflow-y: scroll;
&::-webkit-scrollbar {
    display: none;
    }
`
const Search = styled.input`
 margin-top: 1em;
 width: 75%;
 height: 1.8em;
 display: inline-block;
`
const SearchButton = styled.button`
background-color: blue;
border-radius: 10px;
padding: .25em;
font-size: 1.3em;
margin-top: 1em;
color: white;
`


const Content = (props) => {
    console.log(props.data)
    return (
        <ContentDiv>
            
            {/* <Search />
            <SearchButton>Search!</SearchButton> */}
            {
                props.data.map((item,i) => {
                    return <Card 
                    key={i} 
                    name={item.name}
                    gender={item.gender}
                    height={item.height}
                    weight={item.mass}
                     />
                })
            }

            <h1 className="text">The Last Jedi was AWFUL</h1>
        </ContentDiv>
    );
}

export default Content;
