import { NavLink } from "react-router-dom";
import studentPhoto from "../../../images/profile-image.jpg";

export default function AboutMe() {
    return (
        <section id="student" className="about-me">
            <h2 className="about-me__header">Студент</h2>
            <div className="about-me__person">
                <div className="about-me__person-info">
                    <div className="about-me__person-info-wrapper">
                        <h3 className="about-me__person-name">Елена</h3>
                        <p className="about-me__person-caption">Фронтенд-разработчик, 32 года</p>
                        <p className="about-me__person-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    </div>
                    <NavLink to="https://github.com/elenaf" className="about-me__person-link">Github</NavLink>
                </div>
                {/* <div className="about-me__person-photo"></div> */}
                <img alt="Elena" src={studentPhoto} className="about-me__person-photo"/>
            </div>
        </section>
    );
}