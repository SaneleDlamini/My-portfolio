import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/style.css';
import banner from '../images/image.png';

const MovieDetail = () => {

     const [movies, setMovies] = useState([]);


  let params = useParams();
  let id = params.id;

  const handleMovies = () => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1/${id}`).then(response => {
        return response.json();
      }).then(data => {
        setMovies(data.results[0])
      })
   }
   useEffect(() => {
      handleMovies();
   }, [])

// const selected = movies.filter(movie => movie.id == id);
  console.log(movies[0]);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);

    const handleName = (e) => {
      setName(e.target.value);
    }

    const handleSurname = (e) => {
      setSurname(e.target.value);
    }

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }

    const handleNumber = (e) => {
      setNumber(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(name === ''){
        setNameError(true);
      }
      if(surname === ''){
        setSurnameError(true);
      }
      if(email === ''){
        setEmailError(true);
      }
      if(number === ''){
        setNumberError(true);
      }

      setNameError(false);
      setSurnameError(false);
      setEmailError(false);
      setNumberError(false);

      setName('');
      setSurname('');
      setEmail('');
      setNumber('');
    }

    return (
        <div className='container'>
            <div className='movie-details'>
               <span className='movie-img'>
                  <img src={banner} />
               </span>
               <span className='movie-content'>
                  <h3>Cars</h3>(2006)  
                    <p>Movie description goes here</p><br />
                  <h4>Ratings : 56</h4><br />
                  <h3>Overview</h3>
                    <p>
                        The year that the movie was made must be in the name of the movie.
                        The rules for the colour for the rating will be the same as the browse movie page.
                        The layout of what the movie detail pages needs to be can be seen below. 
                    </p><br />
                  <h3>Genres</h3>
                    <p>Animation, Adventure, Comedy, Family</p>
               </span>
            </div>
            <form onSubmit={handleSubmit}>
               <div className='form-group'>
                 <input type='text' placeholder='First name*' onChange={handleName} className={ `${nameError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}}/><br />
                 {nameError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Name is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' placeholder='Surname*' onChange={handleSurname} className={ `${surnameError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}}  /><br />
                 {surnameError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Surname is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' placeholder='Email*' onChange={handleEmail} className={ `${emailError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}} /><br />
                 {emailError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Email is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' placeholder='Phone Number*' onChange={handleNumber} className={ `${numberError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}} /><br />
                 {numberError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Number is required</small><br/></>}
               </div>
               <div className='form-group'>
                  <button type='submit'>Get Movie</button>
               </div>
            </form>
        </div>
    )
}

export default MovieDetail
