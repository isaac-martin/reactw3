import React, {Component} from 'react';

const Header = props => (
  <header className="black mb5 pt5">
    <h1 className="ttu f3 tracked-mega anton tc mt0 mb3">Marmalade.fm</h1>
    <ul className="list flex justify-center pl0">
      <li className="mh2">
        <a className="nav-link f6 ttu biryani-black gray">Whats Hot</a>
      </li>
      <li className="mh2">
        <a className="nav-link f6 ttu biryani-black gray">Archive</a>
      </li>
      <li className="mh2">
        <a className="nav-link f6 ttu biryani-black gray">About</a>
      </li>
    </ul>
  </header>
);

export default Header;
