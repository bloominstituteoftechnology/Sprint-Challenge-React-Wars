import React from 'react';
import './CardContainer.css'
const CardContainer = props => {
    return (
        <div>
            {props.chars.map(char => {
                return (
                    <div>
                        <div className="character">
                            <div className="title">
                                <p className="name">{char.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardContainer;

// export const CharacterInfo = (props) => {
//     return (
//         <div>
//             {props.chars.map(char => {
//                 return (
//                     <div>
//                         <Card className="character">
//                             <div className='title'>
//                                 <p className="name">{char.name}</p>
//                                 <p className="born"> - Born {char.birth_year}</p>
//                             </div>

//                             <div>
//                                 <p className="info">{char.skin_color} skinned {char.gender}, {char.eye_color} eyes, {char.hair_color} hair, {char.height}cm tall, {char.mass}kg heavy</p>
//                             </div>
//                         </Card>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }