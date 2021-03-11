import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
// import Link from './Link';

const Header = () => {
  const activeLinkStyles = {
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#f64c72',
  };

  return (
    <div className="ui four item menu header-container">
      <NavLink
        to="/"
        className="item"
        exact={true}
        activeStyle={activeLinkStyles}
      >
        Accordion
      </NavLink>
      <NavLink to="/list" className="item" activeStyle={activeLinkStyles}>
        Search
      </NavLink>
      <NavLink to="/dropdown" className="item" activeStyle={activeLinkStyles}>
        Dropdown
      </NavLink>
      <NavLink to="/translate" className="item" activeStyle={activeLinkStyles}>
        Translate
      </NavLink>
    </div>
  );
};

export default Header;
