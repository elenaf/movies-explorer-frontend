import './App.css';

import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Layout from '../Layout/Layout';

import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { register, login, getUserData } from '../../utils/Auth';
import { useEffect } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({/* name: '', email: '' */});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegOk, setIsRegOk] = useState(true);
  const navigate = useNavigate();

  const tokenCheck = async() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      try {
        const userData = await getUserData(token);
        setCurrentUser(...currentUser, userData);
        setIsLoggedIn(true);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleRegister = async(name, email, password) => {
    try{
      const userData = await register(email, password, name);
      setIsRegOk(true);
      await handleLogin(email, password);
      setCurrentUser(userData);
    } catch (err) {
      setIsRegOk(false);
    }
  };

  const handleLogin = async(email, password) => {
    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      navigate("/movies");
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        < Routes>
          < Route 
            path='/' 
            element={
              <Layout isLoggedIn={isLoggedIn}>
                < Main/>
              </Layout>} 
          />

          < Route 
            path='/movies'
            isLoggedIn={isLoggedIn}
            element={
              < ProtectedRoute element={
                <Layout>
                  < Movies />
                </Layout>
              } />
            }
          />

          < Route 
            path='/saved-movies'
            isLoggedIn={isLoggedIn}
            element={
              < ProtectedRoute element={
                <Layout>
                  < SavedMovies />
                </Layout>
              } />
            }
          />

          < Route 
            path='/profile'
            isLoggedIn={isLoggedIn}
            element={
              < ProtectedRoute element={
                <Layout hasFooter={false}>
                  < Profile />
                </Layout>
              } />
            }
          />

          < Route 
            path='/signin' 
            element={
              <Layout hasHeader={false} hasFooter={false} isLoggedIn={isLoggedIn}>
                  < Login handleLogin={handleLogin} />
              </Layout>} 
          />

          < Route 
            path='/signup' 
            element={
            <Layout hasHeader={false} hasFooter={false} isLoggedIn={isLoggedIn}>
              < Register handleRegister={handleRegister} isRegOk={isRegOk} />
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
