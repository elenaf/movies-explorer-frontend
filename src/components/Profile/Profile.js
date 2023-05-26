import './Profile.css';

import React, { useEffect, useState } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../utils/useForm';
import InfoPopup from '../InfoPopup/InfoPopup';

export default function Profile({ handleProfileEdit, handleSignOut, isInfoPopupOpen, setIsInfoPopupOpen, popupMessage }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isEditButtonActive, setIsEditButtonActive] = useState(false);

    const { values, handleChange } = useFormWithValidation({ email: currentUser.email, name: currentUser.name });

    let { name, email } = values;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleProfileEdit({ name, email });
    }

    useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsEditButtonActive(false);
        } else {
            setIsEditButtonActive(true);
        }
    }, [name, email, currentUser]);

    return (
        <section className="profile">
            <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__data-string">
                    <label htmlFor="profile-name" className="profile__field profile__name-field">Имя</label>
                    <input 
                        id="profile-name" 
                        name="name"
                        className="profile__field-data profile__name" 
                        type="text"
                        value={values["name"]} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="profile__data-string">
                    <label htmlFor="profile-email" className="profile__field profile__email-field">E-mail</label>
                    <input 
                        id="profile-email"
                        name="email"
                        className="profile__field-data profile__email"
                        type="email"
                        value={values["email"]} 
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="profile__control-buttons">
                    <button type="submit" className="profile__control-button profile__submit-button" disabled={!isEditButtonActive}>Редактировать</button>
                    <button type="button" onClick={handleSignOut} className="profile__control-button profile__signout-button">Выйти из аккаунта</button>
                </div>
            </form>

            <InfoPopup isOpen={isInfoPopupOpen} setIsOpen={setIsInfoPopupOpen}>
                <span>{popupMessage}</span>
            </InfoPopup>

        </section>
    );
}