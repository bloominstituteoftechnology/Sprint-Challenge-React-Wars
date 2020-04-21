// Write your Character component here
import React, { useEffect, useState } from "react"
import axios from "axios"
import InfoCard from "./Info-card"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Characters = () => {

    const [soldier, setSoldier] = useState([])

    useEffect (() => {
        axios.get("https://swapi.py4e.com/api/people/")
        .then(res => setSoldier(res.data.results))
        .catch(err => {console.log("The data was not returned", err)})
    }, [])
    return (
        <Container className="charactersApi">
            {soldier.map(soldier => {
                return <InfoCard key="index" soldier={soldier} />
            })}
        </Container>
    )

}

export default Characters

