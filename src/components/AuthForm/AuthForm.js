import './AuthForm.css';

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function AuthForm(props) {
    const { greetingText, submitButtonText, underFormText, underFormLinkText, underFormLink, isRegForm } = props;
    return (
        <section className="authorization">
            <div className="authorization-head">
                < Logo />
                <h2 className="authorization-head__greeting">{greetingText}Добро пожаловать!</h2>
            </div>
            
            <form className="authorization__form">
                <fieldset className="authorization__fields">
                    <label for="auth-name" className="auth-label">Имя</label>
                    <input id="auth-name" type="text" className="auth-field authorization__name" placeholder="Имя" required/>
                    
                    <label for="auth-email" className="auth-label">E-mail</label>
                    <input id="auth-email" type="email" className="auth-field authorization__email" placeholder="Email"/>
                    
                    <label for="auth-password" className="auth-label">Пароль</label>
                    <input id="auth-password" type="password" className="auth-field authorization__password"/>
                    
                </fieldset>
                <button type="submit" className="authorization__submit-button">{submitButtonText}Зарегистрироваться</button>
            </form>  
            <p className="authorization__under-form-line">{underFormText}Уже зарегистрированы?&nbsp;
                <Link to={underFormLink}/* "/signin" */ className="authorization__under-form-link">{underFormLinkText}Войти</Link>
            </p>
            
        </section>
    );
}