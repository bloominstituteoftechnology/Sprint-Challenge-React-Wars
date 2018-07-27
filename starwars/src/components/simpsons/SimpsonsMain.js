import React from 'react';
import './simpsons.css';
import Card from './Card';


const SimpsonsMain = props => {
  return (
    <div className="simpsons-bg-img">
      <div className="simpsons-main-container">
        <h1 className="Header">React Wars</h1>
        <div className="cards-container">
          {props.simpsonsChars.map((item, index) => {
            let imgObj = [
              {
                imgName: 'homer',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'marge',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'bart',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'lisa',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'maggie',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'grandpa',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'burns',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'milhouse',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'moe',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'ned',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
            ]
            const links = imgObj[index].url;
            return (
                <Card
                key={1977 + Math.random()} 
                name={item.name}
                imgName={links}
                homeworld={item.name}
                birthYear={item.name}
                gender={item.name}
                skinColor={item.name}
                hairColor={item.name}
                eyeColor={item.name}
                height={item.name}
                mass={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SimpsonsMain;