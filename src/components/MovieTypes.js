import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';
import '../App.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const MovieTypes = ({ title, getUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getUrl);
      // console.log(request);
      // return request;
      setMovies(request.data.results);
    }
    fetchData();
  }, [getUrl]);

  // console.log(movies);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if you have already clicked on the trailer, set the trailer url to empty
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          // get d id of the trailer
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <div>
        <h2>{title}</h2>
        <div className='row_posters'>
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            />
          ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default MovieTypes;
