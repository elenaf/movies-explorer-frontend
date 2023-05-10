import './App.css';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext, currentUser, changeCurrentUser } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Layout from '../Layout/Layout';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <CurrentUserContext.Provider value={{currentUser, changeCurrentUser}}>
      <div className="App">

        < Routes>
          < Route 
            path='/' 
            element={
              <Layout isLoggedIn={isLoggedIn} handleLogin={setIsLoggedIn}>
                < Main/>
              </Layout>} 
          />

          < Route 
            path='/movies' 
            element={
              <Layout isLoggedIn={isLoggedIn}>
                < Movies />
              </Layout>} 
          />

          < Route 
            path='/saved-movies' 
            element={
              <Layout isLoggedIn={isLoggedIn}>
                < SavedMovies />
              </Layout>} 
          />

          < Route 
            path='/profile' 
            element={
              <Layout hasFooter={false} isLoggedIn={isLoggedIn}>
                  < Profile />
              </Layout>} 
          />

          < Route 
            path='/signin' 
            element={
              <Layout hasHeader={false} hasFooter={false} isLoggedIn={isLoggedIn}>
                  < Login />
              </Layout>} 
          />

          < Route 
            path='/signup' 
            element={
            <Layout hasHeader={false} hasFooter={false} isLoggedIn={isLoggedIn}>
              < Register />
            </Layout>} 
          />

          < Route 
            path='*' 
            element={
            <Layout hasHeader={false} hasFooter={false} isLoggedIn={isLoggedIn}>
              < NotFound />
              </Layout>} 
          />
        </Routes>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
