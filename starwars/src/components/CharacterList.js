import React from 'react';
import Character from './Character'
import './StarWars.css';


const CharacterList = props => { //props is data
    console.log(props.starwarsChars) //is it working?
/*
   1.) You take in the data from props, which is passed in from the constructor's initial state*SINGLE SOURCE OF TRUTH) from App.js. This is the first data flow. Flow #1! 

   The map() method creates a new array explicity here(explicit means not defaulted within the environment), calling the provided function for every array element. This map in particular takes every element from each object and returns it inside the Character component with the key(assigned unique ids to avoid duplication bugs) being the object literal property, .name. If you do not declare a way for unique ids it defaults to index(which creates problems if you pass in the same input string).

   2.) The result from the map method passes in the result's state values to the child components as props. In this case, we're passing it into the Character component, stating that characterData is state data mapped out from this component. The Character component will take this is as props. Flow #2!

Example:  

   Where items = Object literals, and item = each individual object literal property:

This method translates to:

itemsofPropsListFromParent.map(eachItemofPropsListFromParent [passes into =>] <ChildComponentThatTakesInMapDataAsProps key={unique.id} stateDataTurnedChildProp={dataFromMap}) 

Summarization:

	App.js data[props]=> CharacterList takes data[props], creates stored list[state], passes data into => Character, takes data from Character[props], renders it into a class card. BOOYAH! I GET IT! GODDAMN!

*/

    return (

        <div className="char-wrapper">
            {props.starwarsChars.map( character => (
                <Character key={character.name}
                characterData={character}/>

            ))}
        </div>




    );
};



export default CharacterList;