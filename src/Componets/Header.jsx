import React, { useState, useRef, useEffect } from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderNav from './HeaderNav';
import Mobilelink from './Mobilelink';
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
          <div className="mobileHeader-mane-section">
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
          <div className="mobileHeader-section">
            <div className="lable">Kategorijos</div>
            <Mobilelink
              text={'Moterims'}
              img={
                'https://images1.vinted.net/t/03_02400_srzKqhTigAZH2N6p1XpaP5Pq/48x48/1623310088.png?s=1c80e4478b971115c8dd4618de7aabbac13189e7'
              }
            />
            <Mobilelink
              text={'Vyrams'}
              img={
                'https://images1.vinted.net/t/03_026db_eoet3G4ph7RCugDXjD19dxdD/48x48/1623310082.png?s=a500167bbf92fbaa6072056ab7c2a25eafd0fc01'
              }
            />
            <Mobilelink
              text={'Vaikams'}
              img={
                'https://images1.vinted.net/t/03_01a60_RahcKeScFL2WZfgrjfZUmpv9/24x24/1623310086.png?s=65686232df4e5d375887fc26c8ae2008161e80ac'
              }
            />
            <Mobilelink
              text={'Namams'}
              img={
                'https://images1.vinted.net/t/03_00175_hfk6omfUTjEUmqCzE4GXXNZz/48x48/1623310088.png?s=fc29a9e411f7f091860efe881d8d79588017ebf4'
              }
            />
          </div>

          <div className="mobileHeader-section">
            <div className="lable">Sužinok daugiau</div>
            <Mobilelink text={'Kaip veikia Vinted?'} />
            <Mobilelink text={'Programėlė'} />
            <Mobilelink text={'Pagalba'} />
            <Mobilelink text={'Aktualu'} />
          </div>
          <div className="mobileHeader-section">
            <div className="lable">Apie įmonę</div>
            <Mobilelink text={'Apie Vinted'} />
            <Mobilelink text={'Karjera'} />
            <Mobilelink text={'Žiniasklaidai'} />
            <Mobilelink text={'Reklama'} />
          </div>
          <div className="mobileHeader-section">
            <div className="lable">Nuostatai</div>
            <Mobilelink text={'Saugumo politika'} />
            <Mobilelink text={'Privatumo politika'} />
            <Mobilelink text={'Taisyklės'} />
            <Mobilelink text={'Slaptuku politika'} />
          </div>
          <div className="mobileHeader-section">
            <div className="lable">Privatumas</div>
            <Mobilelink text={'Slaptuku nustatymai'} />
          </div>
          <div className="mobileHeader-section">
            <div className="lable">Bendruomenė</div>
            <Mobilelink text={'Forumas'} />
          </div>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
