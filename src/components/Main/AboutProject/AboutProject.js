import './AboutProject.css';

export default function AboutProject() {
    return (
        <section id="project" className="about-project">
            <h2 className="about-project__header">О проекте</h2>
            <div className="about-project__items">
                <div className="about-project__item">
                        <h3 className="about-project__item-header">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__item">
                        <h3 className="about-project__item-header">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="scale">
                <div className="scale__timeline">1 неделя</div>
                <div className="scale__caption">Back-end</div>
                <div className="scale__timeline">4 недели</div>
                <div className="scale__caption">Front-end</div>
            </div>
        </section>
    );
}