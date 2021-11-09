import React from 'react';
import Brends from './Brends';
import Header from './Header';
import Hero from './Hero';
import NewOffers from './NewOffers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SelectedProducts from './SelectedProducts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={[
            <Hero
              title={'Atėjo metas atlaisvinti vietos spintoje?'}
              primaryLinkText={'Įkelti prekę'}
              secondaryLinkText={'Sužinok, kaip'}
            />,
            ,
            <Brends />,
            <NewOffers headerText={'Naujienų srautas'} />,
          ]}
        />

        <Route path="/product:id" element={<SelectedProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
