export default function AboutMe() {
    return (
        <section id="student" className="about-me">
            <h2 className="about-me__header">Студент</h2>
            <div className="about-me__person">
                    <h3 className="about-me__person_name">Елена</h3>
                    <p className="about-me__person_caption">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__person_description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <img alt="Elena" src="#" className="about-me__person_photo"/>
                    <button className="about-me__person_link">Github</button>
            </div>
        </section>
    );
}