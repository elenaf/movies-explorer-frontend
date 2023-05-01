import { NavLink } from "react-router-dom";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
                <nav className="portfolio__links">
                    <NavLink to="#" className="portfolio__link">Статичный сайт</NavLink>
                    <NavLink to="#" className="portfolio__link">Адаптивный сайт</NavLink>
                    <NavLink to="#" className="portfolio__link">Одностраничное приложение</NavLink>
                </nav>
        </section>
    );
}