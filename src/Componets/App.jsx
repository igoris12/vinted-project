import React from 'react';
import Header from './Header';
import Hero from './Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero
        title={'Atėjo metas atlaisvinti vietos spintoje?'}
        primaryLinkText={'Įkelti prekę'}
        secondaryLinkText={'Sužinok, kaip'}
        // primaryLinkPath={'/'}
      />
    </div>
  );
};

export default App;
