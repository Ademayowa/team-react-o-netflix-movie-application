import React from 'react';
import './App.css';

import Landing from './components/Landing';
import FAQ from './components/FAQ/Faq';
import Watch from './components/Watch/Watch';

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <Watch/>
      <FAQ/>
    </div>
  );
};

export default App;
