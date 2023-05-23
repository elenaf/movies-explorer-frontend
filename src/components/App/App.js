import './App.css';

import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Layout from '../Layout/Layout';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { register, login, getUserData } from '../../utils/Auth';
import mainApi from '../../utils/MainApi';
import { useEffect } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', email: '', _id:''});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegOk, setIsRegOk] = useState(true);
  const navigate = useNavigate();

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserData(token)
      .then((res) => {
        if (res) {
          const userData = {
            name: res.name,
            email: res.email
          }
          setIsLoggedIn(true);
          setCurrentUser(userData);
          navigate("/movies", {replace: true});
        }
      })
      .catch((err) => console.log(err));
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

  const setUserInfo = async() => {
    try {
      const userInfo = await mainApi.getUserInfo();
      setCurrentUser(userInfo);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate("/signin");
    setCurrentUser({email: '', name: '', _id: ''});
    setIsLoggedIn(false);
  }

  const handleProfileEdit = async({ name, email }) => {
    try {
      const userData = await mainApi.editProfile({ email, name });
      setCurrentUser({ ...currentUser, userData });
      console.log(currentUser);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    tokenCheck();
    if (isLoggedIn) {
      setUserInfo();
    }
  }, []);

  useEffect(() => {
    // почему тут начинается безумный поток запросов?
    /* if (isLoggedIn) {
      setUserInfo();
    } */
  }, [currentUser, isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        < Routes>
          < Route 
            exact path='/' 
            element={
              <Layout isLoggedIn={isLoggedIn}>
                < Main/>
              </Layout>} 
          />

          < Route 
            path='/movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Layout isLoggedIn={isLoggedIn}>
                  < Movies />
                </Layout>
              </ProtectedRoute>
            }
          />
              

          < Route 
            path='/saved-movies'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Layout isLoggedIn={isLoggedIn}>
                  < SavedMovies />
                </Layout>
              </ProtectedRoute>
            }
          />

          < Route 
            path='/profile'
            isLoggedIn={isLoggedIn}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Layout hasFooter={false} isLoggedIn={isLoggedIn}>
                  < Profile handleProfileEdit={handleProfileEdit} handleSignOut={handleSignOut}/>
                </Layout>
              </ProtectedRoute>
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
