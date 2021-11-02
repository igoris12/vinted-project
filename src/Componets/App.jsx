import React from 'react';
import Brends from './Brends';
import Header from './Header';
import Hero from './Hero';
import NewOffers from './NewOffers';

const App = () => {
  return (
    <div>
      <Header />
      <Hero
        title={'Atėjo metas atlaisvinti vietos spintoje?'}
        primaryLinkText={'Įkelti prekę'}
        secondaryLinkText={'Sužinok, kaip'}
      />
      <Brends />
      <NewOffers headerText={'Naujienų srautas'} />
    </div>
  );
};

export default App;
