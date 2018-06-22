import React from 'react';
import './header.css';
import Icon from './Icon';
import Logo from './Logo';


const HeaderContainer = (props) => {

return (
    
    <div className='header-container'>
       <Icon icon = {<i className = "fas fa-cog normal-theme" > </i>} />
       <Logo />
       <Icon icon = { <i className = "fas fa-comments normal-theme" > </i>} />

    </div>
);

}

export default HeaderContainer;

