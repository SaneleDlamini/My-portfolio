import React from 'react';
import '../css/style.css';
import banner from '../images/image.png';

const PopularMovies = ({movies, onView}) => {
    return (
        <div className='container'>
              {movies.map(movie => {
                return <div className='movie' onClick={ ()=> onView(movie.id) }>
                      <span className={`rating ${movie.vote_average === 0 ? 'classZero' : movie.vote_average < 50 ? 'lessThanFifty' 
                      : movie.vote_average >=50 && movie.vote_average < 70 ? 'greaterOrLess' : movie.vote_average >=70 ? 'greater' : ''}`}>
                        { movie.vote_average }
                      </span>
                      <img src={'http://image.tmdb.org/t/p/w500'+movie.poster_path} alt={movie.poster_path} />
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
