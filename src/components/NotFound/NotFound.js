import './NotFound.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <section className="not-found">
            <h1 className="not-found__header">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <button onClick={goBack} className="not-found__link-back">Назад</button>
        </section>
    );
}