import React from 'react';
import Brends from './Brends';
import Header from './Header';
import Hero from './Hero';
import NewOffers from './NewOffers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero
        title={'Atėjo metas atlaisvinti vietos spintoje?'}
        primaryLinkText={'Įkelti prekę'}
        secondaryLinkText={'Sužinok, kaip'}
      />
      <Brends />
      <NewOffers headerText={'Naujienų srautas'} />
    </Router>
  );
};

export default App;
