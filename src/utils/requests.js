const API_KEY = '7901196bc2c9638bd91640c76143181a';

const requests = {
  getTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrowMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
