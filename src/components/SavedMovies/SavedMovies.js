import React from "react";

import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import More from "../Movies/More/More";

export default function SavedMovies() {
    return (
        <>
            < SearchForm />
            < MoviesCardList />
            < More />
        </>
    );
}