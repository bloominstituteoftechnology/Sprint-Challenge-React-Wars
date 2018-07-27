import React from 'react';
import './StarWars.css';
import Card from './Card';


const StarWarsMain = props => {
  return (
    <div className="star-bg-img">
      <div className="star-main-container">
        <h1 className="Header">React Wars</h1>
        <div className="cards-container">
          {props.starwarsChars.map((item, index) => {
            let imgObj = [
              {
                imgName: 'luke',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/luke-sky.jpg'
              },
              {
                imgName: 'c3po',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/C-3PO.jpg'
              },
              {
                imgName: 'r2-d2',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/r2-d2.jpg'
              },
              {
                imgName: 'darth',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/Darth-Vader.jpg'
              },
              {
                imgName: 'leia',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/princess-leia.jpg'
              },
              {
                imgName: 'owen',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/Uncle-Owen.jpg'
              },
              {
                imgName: 'beru',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/Beru.jpg'
              },
              {
                imgName: 'r5-d4',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/r5-d4.jpg'
              },
              {
                imgName: 'biggs',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/biggs-dark.jpg'
              },
              {
                imgName: 'obi',
                url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1688543/obi-wan-kenobi.jpg'
              },
            ]
            const links = imgObj[index].url;
            return (
                <Card
                key={1977 + Math.random()} 
                name={item.name}
                imgName={links}
                homeworld={item.homeworld}
                birthYear={item.birth_year}
                gender={item.gender}
                skinColor={item.skin_color}
                hairColor={item.hair_color}
                eyeColor={item.eye_color}
                height={item.height}
                mass={item.mass}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StarWarsMain;