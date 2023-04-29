import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Portfolio from "./Portfolio/Portfolio";
import Tech from "./Techs/Techs";
import Promo from "./Promo/Promo";

export default function Main() {
    return (
        <>
            < Promo />
            < NavTab />
            < AboutProject />
            < Tech />
            < AboutMe />
            < Portfolio />
        </>
    );
}