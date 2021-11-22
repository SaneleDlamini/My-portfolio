import React from 'react';
import '../css/style.css';
import banner from '../images/image.png';
import Card from '../UI/Card';

const PopularMovies = ({movies, onView}) => {
  console.log(movies.results)
    return (
        <div className='container'>
              {movies.map(movie => {
                return <div className='movie' onClick={ ()=> onView(movie.id) }>
                      <span className='rating'>{ movie.vote_average }</span>
                      <img src={banner} alt={movie.poster_path} />
                      <span className='movie-title'>
                      <h4 className='title'>{ movie.original_title }</h4>
                </span>
              </div>
              })
             }
        </div>
    )
}

export default PopularMovies
