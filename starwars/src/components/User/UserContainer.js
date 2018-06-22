import React from 'react';
import UserCard from './UserCard';
import Icon from '../header/Icon';
import './user.css';

const UserContainer = (props) => {
    return (
        <div>   
            <div className='user-container'>
                {/* {props.firstCharacter.map((char, index) => {
                    return <UserCard key={index} className = {'hidden'}
                    {...char}/>
                })}
                 */}
                 <UserCard key = {Math.floor((Math.random()*10))} {...props.firstCharacter} />
            </div>
                 <div class='controls-container'>
            < div className='x-circle' > < Icon icon={<i className="fas fa-times red-x" > </i>} /> </div> 
                  <div className = 'info-circle' > i </div> 
            <div className='heart-circle' > < Icon icon={<i className="fas fa-heart green-heart" > </i>} /> </div>
            </div>

</div>
            )}; 
export default UserContainer;