import './Profile.css';

import React, { useState, useContext } from "react";

import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile() {
    const { currentUser, changeCurrentUser } = useContext(CurrentUserContext);/* 
    const currentUserChange = useContext(CurrentUserContext); */

    let { name, email } = currentUser;

    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(email);
    const [headerName, setHeaderName] = useState(name);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit');
        changeCurrentUser(userName, userEmail);
        /* currentUser.name = userName;
        currentUser.email = userEmail; */
        setHeaderName(userName);
    }

    const handleNameChange = (evt) => {
        setUserName(evt.target.value);
    }

    const handleEmailChange = (evt) => {
        setUserEmail(evt.target.value);
    }

    return (
        <section className="profile">
            <h2 className="profile__greeting">Привет, {headerName}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__data-string">
                    <label htmlFor="profile-name" className="profile__field profile__name-field">Имя</label>
                    <input id="profile-name" className="profile__field-data profile__name" value={userName} onChange={handleNameChange} />
                </div>
                <div className="profile__data-string">
                    <label htmlFor="profile-email" className="profile__field profile__email-field">E-mail</label>
                    <input id="profile-email" className="profile__field-data profile__email" value={userEmail} onChange={handleEmailChange} />
                </div>

                <div className="profile__control-buttons">
                    <button type="submit" className="profile__control-button profile__submit-button">Редактировать</button>
                    <NavLink to="/signin" className="profile__control-button profile__signout-button">Выйти из аккаунта</NavLink>
                </div>
            </form>

        </section>
    );
}