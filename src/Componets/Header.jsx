import React from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <span>
          Prekėa <i>icont</i>
        </span>
        <samp>
          <i>icon</i>
          <input type="text" />
        </samp>
      </div>
      <div className="button-container">
        <button>one</button>
        <button>two</button>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      </div>
      <div>
        <i>icon</i>
      </div>
      <div className="links-container">
        <ul>
          <span>
            <a href="#">some shit</a>
          </span>
          <span>
            <a href="#">some shit</a>
          </span>
          <span>
            <a href="#">some shit</a>
          </span>
          <span>
            <a href="#">some shit</a>
          </span>
          <span>
            <a href="#">some shit</a>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
