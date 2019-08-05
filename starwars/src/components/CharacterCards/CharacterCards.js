import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../CharcterCard/CharacterCard'
import PageButtons from '../PageButtons/PageButtons';
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const CardDisplay = styled.section`
  box-sizing: border-box;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  margin: 50px auto;
  
 `;

const PageButtonContainer = styled.span`
  margin:50px;
`;


const CharacterCards = () => {

    const [personArr, setPersonArr] = useState([]);
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [api, setApi] = useState(`https://swapi.co/api/people/`);

    // const buttons = document.querySelectorAll('.button')

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setPersonArr(res.data.results)
                setPrevPage(res.data.previous)
                setNextPage(res.data.next)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [api]);

    const prevPageHandler = () => setApi(prevPage)
    const nextPageHandler = () => setApi(nextPage)


    const cards = personArr.map(person => {

        // setHomeworldLink(person.homeworld)

        const stats = (
            <ul>
                <li>Height: {person.height}</li>
                <li>Mass: {person.mass}</li>
                <li>Hair Color: {person.hair_color}</li>
                <li>Eye Color: {person.eye_color}</li>
                <li>Gender: {person.gender}</li>
            </ul>
        )

        const homeworld = (
            <a href={person.homeworld}>Home Planet</a>
        )


        return (
            <CharacterCard

                key={person.url}
                header={person.name}
                description={stats}
                meta={homeworld}></CharacterCard>

        )
    })

    if (personArr === [])
        return <div>Loading...</div>

    return (
        <CardDisplay>
            <Card.Group
                centered
                itemsPerRow={2}>
                {cards}
            </Card.Group>
            <PageButtonContainer>
                <PageButtons
                    prevPage={prevPageHandler}
                    nextPage={nextPageHandler}
                />
            </PageButtonContainer>
        </CardDisplay>
    )
}

export default CharacterCards
