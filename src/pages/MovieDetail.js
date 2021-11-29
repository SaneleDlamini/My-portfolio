import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/style.css';
import banner from '../images/image.png';

const MovieDetail = ({movies}) => {

     const [single, setSingle] = useState([]);


  let params = useParams();
  let id = params.id;
  
   useEffect(() => {
      const m = movies.filter(movie => movie.id == id);
       console.log(m);
       setSingle(m)
   }, [])  

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
      }else{
        setNameError(false)
      }
      if(surname === ''){
        setSurnameError(true);
      }else{
        setSurnameError(false);
      }
      if(email === ''){
        setEmailError(true);
      }else{
        setEmailError(false);
      }
      if(number === ''){
        setNumberError(true);
      }else{
        setNumberError(false);
      }

      const person = {
        name : name,
        surname : surname,
        email : email,
        number : number,
      }

      fetch('https://api.trello.com/1/card/5ffc20b406528c399a348b65/customField/5ffc223c1b802319cb6192fb/item', {
      method : 'PUT',
      body : JSON.stringify(person),
      headers : {
        'Content-Type' : 'application/json'
      },
      key : '6eb508bda626ff893db446eff50d0066',
      token : 'ae4a73cb0e40c46f6e642f5f7429394534b35e3b5a4c7c21438e5389eec20497',
     })
    // const data = await response.json();

      setName('');
      setSurname('');
      setEmail('');
      setNumber('');
    }

    return (
        <div className='container'>
            <div className='movie-details'>
              {single.map(mv => {
                return <> 
                  <span className='movie-img'>
                        <img src={'http://image.tmdb.org/t/p/w500'+mv.poster_path} />
                    </span>
                    <span className='movie-content'>
                        <span className='original-title'>{mv.original_title}</span>&nbsp;<span>({mv.release_date })</span>  
                          <p>{mv.description}</p><br />
                        <span className={`detail-rate ${mv.vote_average === 0 ? 'classZero' : mv.vote_average < 50 ? 'lessThanFifty' 
                      : mv.vote_average >=50 && mv.vote_average < 70 ? 'greaterOrLess' : mv.vote_average >=70 ? 'greater' : ''}`}>Ratings : {mv.vote_average}</span><br /><br />
                        <h3>Overview</h3>
                          <p>{mv.overview}</p><br />
                        <h3>Genres</h3>
                          <p>{mv.genre_ids.map(id => {
                            return <span>{id === 12 ? 'Comedy, ' : id === 16 ? 'Family, ' : id === 18 ? 'Adventure, ' : id === 28 ? 'Animation, ' : ''}</span>
                          })}</p>
                    </span>
                  </>
              })}
                           </div>
            <form onSubmit={handleSubmit}>
               <div className='form-group'>
                 <input type='text' value={name} placeholder='First name*' onChange={handleName} className={ `${nameError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}}/><br />
                 {nameError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Name is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' value={surname} placeholder='Surname*' onChange={handleSurname} className={ `${surnameError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}}  /><br />
                 {surnameError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Surname is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' value={email} placeholder='Email*' onChange={handleEmail} className={ `${emailError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
                 ''}} /><br />
                 {emailError && <><small style={{marginTop:'-5px', paddingLeft:'5px', color:'red'}}>Email is required</small><br/></>}
               </div>
               <div className='form-group'>
                 <input type='text' value={number} placeholder='Phone Number*' onChange={handleNumber} className={ `${numberError ? 'input-error' : ''}`} style={{border: nameError ? '1px solid red':
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
