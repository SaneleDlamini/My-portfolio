import React from 'react';

const Movie = ({movies}) => {
	return(
       <div>
          {movies.map(movie => {
          	return <div key={movie.id}>
          	    <h3>{movie.title}</h3>
          	    <p>{movie.openingText}</p>
          	    <small>{movie.releaseDate}</small>
          	</div>
          })}
       </div>
	)
}

export default Movie;