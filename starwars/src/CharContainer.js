import React from 'react';
import FilmsSection from './FilmsSection';
import StarshipSection from './Starshipsection';
import VehicleSection from './VehicleSection';

const CharContainer =({data}) => {
    return (
        <div className="char-container">
            <div className="char-info">
            <h2><b>{data.name}</b></h2>
            <h4>Born in:{data.birth_year}</h4>
            <h4>Gender:{data.gender}</h4>
            <h4>Height:{data.height}</h4>
            <h4>Mass:{data.mass}</h4>
            <h4>Eye-color:{data.eye_color}</h4>
            <h4>Hair-color:{data.hair_color}</h4>
            <h4>Skin-color:{data.skin_color}</h4>
        </div>
        < FilmsSection flims={data.films}/>
        < StarshipSection starships={data.starships}/>
        < VehicleSection vehicles= {data.vechicles}/>
        </div>
    );
}
export default CharContainer;