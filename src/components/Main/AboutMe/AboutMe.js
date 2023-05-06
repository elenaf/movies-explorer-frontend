import './AboutMe.css';

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
                        <p className="about-me__person-description">Я родилась и живу в Орехово-Зуево, закончила факультет информатики и английского языка в МГОГИ. Я люблю слушать и играть музыку, а ещё увлекаюсь двухколесным транспортом. Много работала в сфере образования, в том числе дистанционного. Недавно начала кодить.</p>
                    </div>
                    <a href="https://github.com/elenaf" target='_blank' rel='noreferrer' className="about-me__person-link">Github</a>
                </div>
                {/* <div className="about-me__person-photo"></div> */}
                <img alt="Elena" src={studentPhoto} className="about-me__person-photo"/>
            </div>
        </section>
    );
}