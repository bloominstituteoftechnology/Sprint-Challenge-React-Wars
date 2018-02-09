import React from 'react';
import './Profile.css';

const Profile = (props) => {
  return (
    <li className='profile'>
      <div>Name: {props.profile.name}</div>
      <div>Birth Year: {props.profile.birth_year}</div>
      <div>Gender: {props.profile.gender}</div>
      <div>Height: {props.profile.height}</div>
      <div>Mass: {props.profile.mass}</div>
      <div>Skin: {props.profile.skin_color}</div>
      <div>Hair: {props.profile.hair_color}</div>
      <div>Eye Color: {props.profile.eye_color}</div>
    </li>
  )
}

export default Profile;