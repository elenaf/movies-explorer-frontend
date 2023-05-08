import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
                <ul className="portfolio__items">
                    <li className="portfolio__item"><a href='https://github.com/elenaf/how-to-learn' target='_blank' rel='noreferrer' className="portfolio__link">Статичный сайт</a></li>
                    <li className="portfolio__item"><a href='https://github.com/elenaf/russian-travel' target='_blank' rel='noreferrer' className="portfolio__link">Адаптивный сайт</a></li>
                    <li className="portfolio__item"><a href='https://github.com/elenaf/react-mesto-api-full-gha' target='_blank' rel='noreferrer' className="portfolio__link">Одностраничное приложение</a></li>
                </ul>
        </section>
    );
}