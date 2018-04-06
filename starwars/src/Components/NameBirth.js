import React from 'react';
// import Flo from './FilmStuff.js'

const Nom = (props) => {
    console.log("Props", props);
    return <div className="Birthstuff"> {props.nbd.map(n => <div key={n.birth_year + n.name}> 
    <div className="palText"> Name:    {n.name}    <br />  <br /> Year of Birth:        {n.birth_year}
    <br /> <br />  Gender:     {n.gender}
    <br /> <br />  Hair:       {n.hair_color}
    <br /> <br />  Height:     {n.height}
    <br /> <br />  Mass:       {n.mass}
    <br /> <br /> Skin Tone:      {n.skin_color}
    </div>
    </div>
    )}
    </div>
}

export default Nom;
// I included all the normal stuff barring the things in film stuff which only returned urls. I will learn that magic.