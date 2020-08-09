import React from 'react';
import './App.css';

import Landing from './components/Landing';
import FAQ from './components/FAQ/Faq';
import Watch from './components/Watch/Watch';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className='App'>
      <Login />
      <Landing />
      <Watch/>
      <FAQ/>
    </div>
  );
};

export default App;
