import React from 'react';
import Img from '../../images/tv.png';
import Title from '../Title';

const Tv = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-6'>
          <Title
            title='Enjoy on your Tv.'
            info='watch on Smart TVs, Xbox, Chromecast, Apple TV, Blu-ray players,and, more.'
          />
        </div>

        <div className='col-md-6'>
          <img src={Img} alt='show' className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default Tv;
