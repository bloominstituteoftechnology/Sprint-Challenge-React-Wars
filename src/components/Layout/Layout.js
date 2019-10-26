import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Content from '../Content/Content';
import styled from 'styled-components';

const LayoutDiv = styled.div `
width: 100%;
height: 100%;
border: 1px solid pink;
`

const Layout = (props) => {

    const [data,updateData] = useState([]);
    let [page, changePage] = useState(1);

    const pageUpHandler= () => {
        changePage(page += 1);
        console.log(page)
    }
    const pageDownHandler= () => {
        changePage(page -= 1);
        console.log(page)
    }

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/?page=${page}`)
        .then(res => {
            console.log(res.data.results);
            console.log(res.data)
            updateData(res.data.results);
            
        })
        .catch(err => {
            console.log(err);
        })

    }, [page])
    return (
        <LayoutDiv>
            <Header
            pageUp={pageUpHandler}
            pageDown={pageDownHandler} />
            <Content 
            data={data}
             />
        </LayoutDiv>
    );
}

export default Layout;
