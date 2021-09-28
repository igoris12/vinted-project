import React, { useState } from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSearch,
  faSortDown,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [sort, setSort] = useState(false);

  const sortDisplayHandler = () => {
    setSort(!sort);
  };

  return (
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
    </div>
  );
};

export default Header;
