import React from 'react';
import CharacterSlideItem from '../Character/CharacterSlideItem';

const CharacterSlide = (props) => {
        return(<div className="CharacterSlide"><div className="CharacterSlideShelf">{props.starwarsChars.map((character, i) => {
                    return(<CharacterSlideItem key={i} character={character} />);
                }
            )}
            </div></div>);
}

export default CharacterSlide;
