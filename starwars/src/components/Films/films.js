import React from 'react';

const Films = props => {
    return (
        <div>
            {props.films.length > 0 ? 'Films:' : 'No Films'}
            {props.films.map((film, index) => (
                <div key={film + index}>
                    <img src={film} alt='Film'/>
                </div>
            ))};
        </div>
    );
};

export default Films;