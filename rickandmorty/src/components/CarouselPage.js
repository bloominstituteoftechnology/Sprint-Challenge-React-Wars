// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselCard from './CarouselCard';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';


const CarouselPage = () => {

    const [page, setPage] = useState('https://rickandmortyapi.com/api/character/?page=1');
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const getPageNumber = (str = '') => {
        if (str === '') {
            return '';
        }
        return str.split('https://rickandmortyapi.com/api/character/?page=')
    }

    useEffect(() => {
        axios
            .get(page)
            .then(response => {
                setCharacters(response.data.results)
                setInfo(response.data.info)


            })
            .catch(error => console.log("Error!", error))
    }, [page]);
    const slides = characters.map((character) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={character.id}
            >
                <CarouselCard key={character.id} character={character} />
            </CarouselItem>
        )
    });
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    return (

        <div className="holder">

            <div className="nav">
                {info.prev !== '' &&
                    <button onClick={() => {
                        setPage(info.prev)
                    }}>Previous</button>}
                <p className="page">{getPageNumber(page)} of {info.pages}</p>
                {info.next !== '' &&
                    <button onClick={() => {
                        setPage(info.next)
                    }}>Next</button>}

            </div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>





        </div>


    )
}

export default CarouselPage;