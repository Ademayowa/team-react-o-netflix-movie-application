import React from 'react';
import './App.css';

import Landing from './components/Landing';
import SignupPlanform from './components/Signup-planform/Signup-planform';

const App = () => {
  return (
    <div className='App'>
      <Landing />
      <SignupPlanform />
    </div>
  );
};

export default App;
