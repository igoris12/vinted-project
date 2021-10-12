import React from 'react';
import Mobilelink from './Mobilelink';

const MobileHeader = ({ toggleS }) => {
  return (
    <>
      <div
        className={
          toggleS ? 'mobileHeader-container' : 'mobileHeader-container active'
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
    </>
  );
};

export default MobileHeader;
