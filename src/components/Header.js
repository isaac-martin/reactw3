import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
const Header = props => (
  <header className="black mb5 pt5">
    <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</h1>
    <ul className="list flex justify-center pl0">
      <li className="mh2">
        <NavLink exact to="/" className="nav-link f6 ttu biryani-black gray">
          Whats Hot
        </NavLink>
      </li>
      <li className="mh2">
        <NavLink to="/archive" className="nav-link f6 ttu biryani-black gray">
          Archive
        </NavLink>
      </li>
      <li className="mh2">
        <NavLink to="/about" className="nav-link f6 ttu biryani-black gray">
          About
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
