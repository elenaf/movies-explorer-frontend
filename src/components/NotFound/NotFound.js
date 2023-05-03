import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="not-found">
            <h1 className="not-found__header">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="#" className="not-found__link-back">Назад</Link>
        </section>
    );
}