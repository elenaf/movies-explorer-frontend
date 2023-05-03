import '../../index.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* < Header /> */}
      {/* < Register /> */}
      {/* < Login /> */}
      < NotFound />
      {/* < Profile /> */}
      {/* < Movies /> */}
      {/* < SearchForm />
      < MoviesCardList /> */}
      {/* < Routes>
        < Route path='/' element={< Main />} />
        < Route path='/movies' element={< Movies />} />
        < Route path='/saved-movies' element={< SavedMovies />} />
        < Route path='/profile' element={< Profile />} />
        < Route path='/signin' element={< Login />} />
        < Route path='/signup' element={< Register />} />
      </Routes> */}
      {/* < Footer /> */}
    </div>
  );
}

export default App;
