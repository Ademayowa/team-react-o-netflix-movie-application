import React from 'react';
import './App.css';

import Landing from './components/Landing';
import Watch from './components/Watch/Watch';

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <Watch/>
    </div>
  );
};

export default App;
