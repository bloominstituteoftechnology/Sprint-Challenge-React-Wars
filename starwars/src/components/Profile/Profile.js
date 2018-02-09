import React from 'react';

const Profile = (props) => {
  return (
    <li className='profile'>
      <div className="profile__info">Name: {props.profile.name}</div>
      <div className="profile__info">Birth Year: {props.profile.birth_year}</div>
      <div className="profile__info">Gender: {props.profile.gender}</div>
      <div className="profile__info">Height: {props.profile.height}</div>
      <div className="profile__info">Skin: {props.profile.skin_color}</div>
      <div className="profile__info">Hair: {props.profile.hair_color}</div>
      <div className="profile__info">Eye Color: {props.profile.eye_color}</div>
    </li>
  )
}

export default Profile;