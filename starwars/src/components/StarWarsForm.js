import React from 'react';
import StarWarsList from './StarWarsList';

function StarWarsForm(props) {
    return (
        <div className='form-container'>
            <div className='card-container'>
                <StarWarsList 
                    characters={props.characters}
                    isDisplayed={props.isDisplayed}
                />
            </div>
            <div className='form-content'>
                <form>
                    {/* <button onClick={console.log('clicked')}>Click Here</button> */}
                </form>
            </div>

        </div>   
    );
}

export default StarWarsForm;