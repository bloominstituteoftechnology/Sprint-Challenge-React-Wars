import React from 'react'

const FilmList = props => {
    return (
        <div className="container fierce">
            <div className="row">
            <select className="mw-100 mein-issues mein-issues-2">
                <option>Films</option>         
            {props.films.map(film => {
                return <option key={film}> {film} </option>
            })}   
            </select>
            </div>
            </div>
    )
}

export default Films


return (
    <div key={characters.url}>
      <BaseStats 
          name={characters.name}
          height={characters.height}
          mass={characters.mass}
          hair_color={characters.hair_color}
          skin_color={characters.skin_color}
          eye_color={characters.eye_color}
          birth_year={characters.birth_year}
          gender={characters.gender}
          url={characters.url}/>
    <WaystationForUrls
      species={characters.species} 
      films={characters.films}
      starships={characters.starships}
      vehicles={characters.vehicles}
      homeworld={characters.homeworld} />

      <BaseStats
        key={species.url} 
        speciesName={species.name} 
        speciesUrl={species.url} />
    </div>
      )
