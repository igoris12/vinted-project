import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderNav from './HeaderNav';
import MobileHeader from './MobileHeader';
import {
  faSearch,
  faSortDown,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sort, setSort] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);

  const changeMolbie = () => {
    if (window.innerWidth <= 890) {
      setMobileHeader(true);
    } else {
      setMobileHeader(false);
    }
  };
  useEffect(() => {
    changeMolbie();
  }, []);

  window.addEventListener('resize', changeMolbie);

  const sortDisplayHandler = () => {
    setSort(!sort);
  };
  const toggleDisplayHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="header"
      style={{ position: toggle ? 'relative' : 'sticky' }}
    >
      <div className="header-container">
        <Link to="/vinted-project" className="logo-container">
          <img src={logo} alt="logo" />
        </Link>

        <div className="sort-container" onClick={sortDisplayHandler}>
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
          style={{ display: !mobileHeader ? 'none' : 'inline-block' }}
        >
          {!toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M2 20h20v-1.5H2V20zM2 5.5h20V4H2v1.5zm0 7.25h20v-1.5H2v1.5z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M18.94 4L12 10.94 5.06 4 4 5.06 10.94 12 4 18.94 5.06 20 12 13.06 18.94 20 20 18.94 13.06 12 20 5.06z"></path>
            </svg>
          )}
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
        <MobileHeader toggleS={toggle} mobileHeaderS={mobileHeader} />
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
