import React from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSortDown,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="sornt-container">
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
      {/* <div className="links-container">
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
      </div> */}
    </div>
  );
};

export default Header;
