import React, {useEffect, useState} from 'react';

import Card from './Card';
import axios from 'axios';

const CardContainer = () => {
    const [peoples, setPeoples] = useState ([]);

    useEffect(() => {
        axios.get('https://swapi.co/documentation#people')
        .then(response => {
            console.log(response.data.results);
            setPeoples(response.data.results);
        })
        .catch(error => {
            console.log('error message', error);
        })
    }, [])}

    return(
        <div className="CardContainer">
            {
                peoples.map((people, index) => {
                    return(
                        <Card key={index} />
                    )
                })
            }
        </div>
    )