import React from 'react';
import SWChar from './SWChar';
import '../StarWars2.css'


const SWMap = (props) => {
    // console.log(props)
    return (
        <section className="m2container2">
            {props.starwarsChars.map((char) => (
                <SWChar SWChar={char}/>
            ))}
        </section>
    )
}
export default SWMap