import React from "react";

export const CurrentUserContext = React.createContext();

export const currentUser = {
    name: 'Елена',
    email: 'pochta@yandex.ru',
};

export const changeCurrentUser = (newName, newEmail) => {
    currentUser.name = newName;
    currentUser.email = newEmail;

};
