import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PopularMovies from './pages/PopularMovies';
import MovieDetail from './pages/MovieDetail';
import AboutDeveloper from './pages/AboutDeveloper';
import NotFound from './pages/NotFound';
import { Route, Redirect, Routes } from 'react-router-dom';

function App() {

   const [singleMovie, setSingleMovie] = useState([]);

   const [movies, setMovies] = useState([]);

   const navigate = useNavigate();

   const handleView = (id) => {
      navigate(`/movies/${id}`);
   }
   
   const handleMovies = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=d4f7b87d7cedfdfbbb297f46aa3e8779&language=en-US&page=1').then(response => {
        return response.json();
      }).then(data => {
        setMovies(data.results)
      })
   }
   useEffect(() => {
      handleMovies();
   }, [])


   return (
      <div>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<PopularMovies movies={movies} onView={handleView} />} />
            <Route path="/developer" element={<AboutDeveloper />} />
            <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </div>
   )
}

export default App;
