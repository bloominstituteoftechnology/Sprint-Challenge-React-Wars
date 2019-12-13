import React, {useState, useEffect} from "react";
import axios from "axios";
import MainCard from "./components/MainCard";
 
// export default function InfoCard() {
// // const [info, setInfo] = useState([]);
 
// //   useEffect(() => {
// //     axios.get(`https://swapi.co/api/people/`).then(
// //         response => {
// //             console.log(response.data.results);
// //             setInfo(response.data.results);
// //         })
// //         .catch(error => {
// //             console.log("The data was not returned", error)
// //           })
// //     }, []);

// //    return (      
// //     <div className="peopleInfo">
// //         {info.map(information => {
// //             return (
// //                 <MainCard
// //                     key={information.name}
// //                     birth_year={information.birth_year}
// //                     height={information.height}
// //                     films={information.films}
// //                 />
// //             );
// //         })}
// //     </div>
// //  );
// }

export default InfoCard