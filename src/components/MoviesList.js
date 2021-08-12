import React from 'react';
import {Link} from 'react-router-dom';

function MoviesList({movies}){
  const renderMovies = Object.keys(movies).map(movieID => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ))
  return <h1>{renderMovies}</h1>
}

export default MoviesList;