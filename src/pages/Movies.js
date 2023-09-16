import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Movies = () => {

  const location = useLocation();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieId = location.state;
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1/${movieId}`);
      const data = await response.json();
      setMovieData(data);
    };
    fetchMovieData();
  }, [location]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>Movies
      <h1>{movieData.title}</h1>
      <img src={movieData.backdrop_path} />
      {console.log(movieData.title)}
    </div>

  )
};

export default Movies;
