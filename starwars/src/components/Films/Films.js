import React from 'react';

const Films = props => {
    return (
        <div>
            {props.films.length > 0 ? 'Films:'  : 'No Films'}
            {props.films.map(film => (
                <div>
                    <img src={film}/>
                </div>
            ))}
        </div>
    );
};

export default Films