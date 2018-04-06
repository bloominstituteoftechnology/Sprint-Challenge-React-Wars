import React from "react";
// import CommentSection from '../CommentSection/CommentSection';
import './Characters.css';

const Characters = props => {
    return (
        <div className = "Char">
            {props.starwarsChars.map((charSheet, index) => {
                return(
                    <div className='Char__Sheet' key={(charSheet.name + index)}>
                        <h3 className="Char__Name">{charSheet.name}</h3>
                        <div className="Char__Attributes">
                            <div className="Char__Attr Char__Height">
                                <h4>Height:</h4><p>{charSheet.height} cm</p>
                            </div>
                            <div className="Char__Attr Char__Weight">
                                <h4>Weight: </h4><p>{charSheet.mass} kg</p>
                            </div>
                            <div className="Char__Attr Char__HairColor">
                                <h4>Hair Color: </h4><p>{charSheet.hair_color}</p>
                            </div>
                            <div className="Char__Attr Char__EyeColor">
                                <h4>Eye Color: </h4><p>{charSheet.eye_color}</p>
                            </div>
                            <div className="Char__Attr Char__BirthYear">
                                <h4>Birth Year: </h4><p>{charSheet.birth_year}</p>
                            </div>
                            <div className="Char__Attr Char__Gender">
                                <h4>Gender: </h4><p>{charSheet.gender}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default Characters;