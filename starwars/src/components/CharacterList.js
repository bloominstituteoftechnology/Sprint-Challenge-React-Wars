import React from 'react'


/* const CharacterList = props => {
  return (
    <div>
      {props.characters.map(profile => (
        <div>
          <Name profile={profile}/>
          <BirthYear profile={profile}/>
          <EyeColor profile={profile} />
          <Films films={profile.films} />
          <Gender profile={profile}/>
          <Hair profile={profile}/>
          <Height profile={profile} />
          <HomeWorld profile={profile} />
          <Mass profile={profile} />
          <SkinColor profile={profile} />
          <Species species={profile.species} />
          <Starships starships={profile.starships} />
          <Vehicles vehicles={profile.vehicles} />
        </div>

      ))}
    </div>
  )
} */

const CharacterList = props => {
  return (
    <React.Fragment>
      <h1>{props.profile.name}</h1>
      <h3>
        Birth Year: {props.profile.birth_year}<br/>
        Eye Color: {props.profile.eye_color}<br/>
        Films: <img src={`${props.profile.films}`} /><br/>
        Gender {props.profile.gender}<br/>
        Hair Color: {props.profile.hair_color}<br/>
        Height: {props.profile.height}cm <br/>
        Home World: {props.profile.homeworld}<br/>
        Skin Color: {props.profile.skin_color}<br/>
        Species: {props.profile.species}<br/>
        Vehicles: {props.profile.vehicles}<br/>
        Starships: {props.profile.starships}<br/>
        Url: {props.profile.url}<br/>
      </h3>
    </React.Fragment>
  );
};

export default CharacterList