export default function Tech() {
    return (
        <section id="tech" className="tech">
            <h2 className="tech__header">Технологии</h2>
            <div className="tech__item">
                    <h3 className="tech__item-header">7 технологий</h3>
                    <p className="tech__item-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="tech-list">
                <li className="tech-list-item">HTML</li>
                <li className="tech-list-item">CSS</li>
                <li className="tech-list-item">JS</li>
                <li className="tech-list-item">React</li>
                <li className="tech-list-item">Git</li>
                <li className="tech-list-item">Express.js</li>
                <li className="tech-list-item">mongoDB</li>
            </ul>
        </section>
    );
}