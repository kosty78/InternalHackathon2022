import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Navbar = (props) => (
  <React.Fragment>
    <div className="nav-center">
      <div className="nav-header">
        <img src="./data/media/img/logo.svg" alt="Beach"></img>
        {/* <button type="button" className="nav-btn"></button> */}
      </div>
      <ul className="nav-links show-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Rooms">Rooms</a>
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default Navbar;
