import React, { useState, useRef, useEffect } from 'react';
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
          style={{ display: !mobileHeader ? 'none' : 'inline-block' }}
        >
          {!toggle ? (
            <FontAwesomeIcon
              className="hamburgerIcon"
              icon={faBars}
            ></FontAwesomeIcon>
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

        <div
          className={
            toggle ? 'mobileHeader-container' : 'mobileHeader-container active'
          }
        >
          <div className="mobileHeader-1-section">
            <a href="#" className="but but-primary momile">
              Įkelti prekę
            </a>
            <a href="#" className="but but-secondary momile">
              Registroutis | Prisijungti
            </a>
            <a href="#" className="but but-noBorder momile">
              Tavo Vinted gidas
            </a>
          </div>
          <div className="mobileHeader-2-section">
            <div className="lable">Kategorijos</div>

            <div className="cell-body">
              <div className="cell-img">
                <img
                  src="https://images1.vinted.net/t/03_02400_srzKqhTigAZH2N6p1XpaP5Pq/48x48/1623310088.png?s=1c80e4478b971115c8dd4618de7aabbac13189e7"
                  alt="icon"
                />
              </div>
              <a href="#" className="cell-link">
                Moterims
              </a>
            </div>
            <div className="cell-body">
              <div className="cell-img">
                <img
                  src="https://images1.vinted.net/t/03_026db_eoet3G4ph7RCugDXjD19dxdD/48x48/1623310082.png?s=a500167bbf92fbaa6072056ab7c2a25eafd0fc01"
                  alt="icon"
                />
              </div>
              <a href="#" className="cell-link">
                Vyrams
              </a>
            </div>

            <div className="cell-body">
              <div className="cell-img">
                <img
                  src="https://images1.vinted.net/t/03_01a60_RahcKeScFL2WZfgrjfZUmpv9/24x24/1623310086.png?s=65686232df4e5d375887fc26c8ae2008161e80ac"
                  alt="icon"
                />
              </div>
              <a href="#" className="cell-link">
                Vaikams
              </a>
            </div>
            <div className="cell-body">
              <div className="cell-img">
                <img
                  src="https://images1.vinted.net/t/03_00175_hfk6omfUTjEUmqCzE4GXXNZz/48x48/1623310088.png?s=fc29a9e411f7f091860efe881d8d79588017ebf4"
                  alt="icon"
                />
              </div>
              <a href="#" className="cell-link">
                Namams
              </a>
            </div>
          </div>
          <div className="mobileHeader-3-section">
            <div className="lable">Sužinok daugiau</div>
            <a href="#">Kaip veikia Vinted?</a>
            <a href="#">Programėlė</a>
            <a href="#">Pagalba</a>
            <a href="#">Aktualu</a>
          </div>
          <div className="mobileHeader-4-section">
            <div className="lable">Apie įmonę</div>
            <a href="#">Apie Vinted</a>
            <a href="#">Karjera</a>
            <a href="#">Žiniasklaidai</a>
            <a href="#">Reklama</a>
          </div>
          <div className="mobileHeader-5-section">
            <div className="lable">Nuostatai</div>
            <a href="#">Saugumo politika</a>
            <a href="#">Privatumo politika</a>
            <a href="#">Taisyklės</a>
            <a href="#">Slaptuku politika</a>
          </div>
          <div className="mobileHeader-6-section">
            <div className="lable">Privatumas</div>
            <a href="#">Slaptuku nustatymai</a>
          </div>
          <div className="mobileHeader-7-section">
            <div className="lable">Bendruomenė</div>
            <a href="#">Forumas</a>
          </div>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
