import React, { useState, useRef } from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderNav from './HeaderNav';
import {
  faSearch,
  faSortDown,
  faQuestionCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [sort, setSort] = useState(false);
  const [toggle, setToggle] = useState(false);

  const sortDisplayHandler = () => {
    setSort(!sort);
  };
  const toggleDisplayHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="sornt-container" onClick={sortDisplayHandler}>
          <span>
            <p>Prekėa</p> <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
          </span>
        </div>
        <div className="search-container">
          <span>
            <FontAwesomeIcon
              icon={faSearch}
              color={'rgb(153, 153, 153)'}
            ></FontAwesomeIcon>
            <input type="text" placeholder={'Ieškoti prekių'} />
          </span>
        </div>
        <div className="button-container">
          <button className="but but-secondary">
            Registroutis | Prisijungti
          </button>
          <button className="but but-primary">Įkelti prekę</button>

          <FontAwesomeIcon
            icon={faQuestionCircle}
            color={'rgb(153, 153, 153)'}
          ></FontAwesomeIcon>
        </div>
        <div
          className="headerHamburger"
          onClick={toggleDisplayHandler}
          style={{ display: toggle ? 'none' : 'inline-block' }}
        >
          <FontAwesomeIcon
            className="hamburgerIcon"
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
        <div
          className="headerClose"
          onClick={toggleDisplayHandler}
          style={{
            display: toggle ? 'inline-block' : 'none',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M18.94 4L12 10.94 5.06 4 4 5.06 10.94 12 4 18.94 5.06 20 12 13.06 18.94 20 20 18.94 13.06 12 20 5.06z"></path>
          </svg>
        </div>
        <div
          className="search-sort-container"
          style={{ display: sort ? 'block' : 'none' }}
        >
          <ul>
            <li>Prekės</li>
            <li>Nariai</li>
            <li>Forumas</li>
            <li>Pagalbos centras</li>
          </ul>
        </div>

        <div
          className="mobileHeader-container"
          style={{ display: toggle ? 'inline-block' : 'none' }}
        >
          aaaaaaa
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
