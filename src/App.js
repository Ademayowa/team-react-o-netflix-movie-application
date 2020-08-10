import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllMovies from './movies/AllMovies';
import Tv from './components/EnjoyTv/Tv';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={AllMovies} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
