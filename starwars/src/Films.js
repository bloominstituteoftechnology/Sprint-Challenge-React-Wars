import React from 'react';

const Films = props => {
    return <div>{props.films.map(films =>(
        <div><span>{films[0].title}</span></div>
    ))}
</div>
};

export default Films;