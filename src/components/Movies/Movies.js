import React from "react";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import More from "./More/More";

export default function Movies() {
    return (
        <>
            < SearchForm />
            < MoviesCardList />
            < More />
        </>
    );
}