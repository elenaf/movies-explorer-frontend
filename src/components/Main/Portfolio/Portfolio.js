import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
                <nav className="portfolio__links">
                    <a href='https://github.com/elenaf/how-to-learn' target='_blank' rel='noreferrer' className="portfolio__link">Статичный сайт</a>
                    <a href='https://github.com/elenaf/russian-travel' target='_blank' rel='noreferrer' className="portfolio__link">Адаптивный сайт</a>
                    <a href='https://github.com/elenaf/react-mesto-api-full-gha' target='_blank' rel='noreferrer' className="portfolio__link">Одностраничное приложение</a>
                </nav>
        </section>
    );
}