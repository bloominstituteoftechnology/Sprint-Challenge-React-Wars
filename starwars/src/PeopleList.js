import React from 'react';
// import './PeopleList.css';
import Friend from './Friend';

const PeopleList = props => {
    return (
        <div>
            {props.results.map(friend => {
            return <Friend key={friend.id} friend={friend} />;
        })}
        </div>
    )
}

export default PeopleList;