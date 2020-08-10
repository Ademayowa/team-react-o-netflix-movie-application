import React from 'react';
import './App.css';
import MovieTypes from './components/MovieTypes';
import Navbar from './components/Navbar';
import AllMovies from './movies/AllMovies';
import Banner from './components/Banner';
import Landing from './components/Landing';
import FAQ from './components/FAQ/Faq';
import Watch from './components/Watch/Watch';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className='App'>
      <Login />
      <Landing />
      <Watch />
      <FAQ />

      <Navbar />
      <Banner />
      <AllMovies />
    </div>
  );
};

export default App;
