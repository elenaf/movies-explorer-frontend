import './Login.css';

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="authorization">
            <div className="authorization-head">
                < Logo />
                <h2 className="authorization-head__greeting">Рады видеть!</h2>
            </div>
            
            <form className="authorization__form">
                <fieldset className="authorization__fields">

                    <label htmlFor="auth-email" className="auth-label">E-mail</label>
                    <input id="auth-email" type="email" className="auth-field authorization__email" placeholder="Email"/>
                    
                    <label htmlFor="auth-password" className="auth-label">Пароль</label>
                    <input id="auth-password" type="password" className="auth-field authorization__password"/>
                    
                </fieldset>
                <button type="submit" className="authorization__submit-button">Войти</button>
            </form>  
            <p className="authorization__under-form-line">Ещё не зарегистрированы?&nbsp;
                <Link to="/signup" className="authorization__under-form-link">Регистрация</Link>
            </p>
            
        </section>
    );
}