import './Main.css';

import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import Tech from "./Techs/Techs";
import Promo from "./Promo/Promo";

export default function Main() {
    return (
        <>
            < Promo />
            < AboutProject />
            < Tech />
            < AboutMe />
            < Portfolio />
        </>
    );
}