import React from 'react';
import { NavLink } from 'react-router-dom';
// import Link from './Link';

const Header = () => {
  return (
    <div className="ui four item menu header-container">
      <NavLink to="/" className="item" exact={true}>
        Accordion
      </NavLink>
      <NavLink to="/list" className="item">
        Search
      </NavLink>
      <NavLink to="/dropdown" className="item">
        Dropdown
      </NavLink>
      <NavLink to="/translate" className="item" a>
        Translate
      </NavLink>
    </div>
  );
};

export default Header;
