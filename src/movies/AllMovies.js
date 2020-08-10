import React, { Fragment } from 'react';
import MovieTypes from '../components/MovieTypes';
import requests from '../utils/requests';
import Navbar from '../components/Navbar';

const AllMovies = () => {
  return (
    <Fragment>
      <Navbar />
      <MovieTypes
        title='Get In On the Action'
        getUrl={requests.getNetflixOriginals}
        isLargeRow
      />
      <MovieTypes title='Popular Movies' getUrl={requests.getTopRated} />
      <MovieTypes title='Documentaries' getUrl={requests.getDocumentries} />
      <MovieTypes title='Action Movies' getUrl={requests.getActionMovies} />
      <MovieTypes title='Trending' getUrl={requests.getTrending} />
      <MovieTypes title='Comedy' getUrl={requests.getComedyMovies} />
      <MovieTypes title='Romance' getUrl={requests.getRomanceMovies} />
      <MovieTypes title='Horror' getUrl={requests.getHorrowMovies} />
    </Fragment>
  );
};

export default AllMovies;
