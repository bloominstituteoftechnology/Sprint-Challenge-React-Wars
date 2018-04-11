import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';


// const SWChars = props => {
//     return (
//         <div className="SWChar-Wrapper" >
//             {props.starwarsChars.map(results => (
//                     <Card>
//                         <CardBody key={results.id}>
//                             <CardTitle>(`${results.name}`)</CardTitle>
//                             <p>{results.homeworld} {results.species}</p>
//                         </CardBody>
//                     </Card>
//             ))
//             }
//       </div >
//     );
//     };
const SWChars = props => {
    //     console.log("Props", props);
    //     // map over staeWarsChars return a dom elment for each name in list
    //     return <div >{props.starwarsChars.map(p => <div>{p.name}:   {p.species}</div>)}</div>;
    return (<Card height='' color='secondary' key={props.char.name}>
        <CardBody >
        <CardTitle >{props.char.name}</CardTitle>
        <CardText>{props.char.birth_year}</CardText>
        </CardBody>
        </Card>)
};

export default SWChars; 