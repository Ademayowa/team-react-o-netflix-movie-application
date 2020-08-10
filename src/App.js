import React from 'react';
import './App.css';

import Landing from './components/Landing';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className='App'>
      <Login />
      {/* <Landing /> */}
    </div>
  );
};

export default App;
