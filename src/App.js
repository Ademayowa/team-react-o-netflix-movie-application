import React from 'react';
import './App.css';
import MovieTypes from './components/MovieTypes';
import Navbar from './components/Navbar';
import AllMovies from './movies/AllMovies';
import Banner from './components/Banner';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <AllMovies />
    </div>
  );
};

export default App;
