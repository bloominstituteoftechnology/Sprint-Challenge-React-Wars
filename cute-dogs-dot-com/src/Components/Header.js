import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <h1>CuteDogs.com</h1>
      <a className="Refresh" href="#" onClick={props.handleRefresh}>
        <i className="fas fa-sync-alt" />
      </a>
    </header>
  );
};

export default Header;
