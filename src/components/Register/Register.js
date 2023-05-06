import './Register.css';

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="authorization">
            <div className="authorization-head">
                < Logo />
                <h2 className="authorization-head__greeting">Добро пожаловать!</h2>
            </div>
            
            <form className="authorization__form">
                <fieldset className="authorization__fields">
                    <label htmlFor="auth-name" className="auth-label">Имя</label>
                    <input id="auth-name" type="text" className="auth-field authorization__name" placeholder="Имя" required/>
                    
                    <label htmlFor="auth-email" className="auth-label">E-mail</label>
                    <input id="auth-email" type="email" className="auth-field authorization__email" placeholder="Email"/>
                    
                    <label htmlFor="auth-password" className="auth-label">Пароль</label>
                    <input id="auth-password" type="password" className="auth-field authorization__password"/>
                    
                </fieldset>
                <button type="submit" className="authorization__submit-button">Зарегистрироваться</button>
            </form>  
            <p className="authorization__under-form-line">Уже зарегистрированы?&nbsp;
                <Link to="/signin" className="authorization__under-form-link">Войти</Link>
            </p>
            
        </section>
    );
}