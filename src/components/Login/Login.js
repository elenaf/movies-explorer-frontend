import './Login.css';

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../utils/useForm';
import { useEffect } from 'react';

export default function Login({ handleLogin, isLoggedIn, errorMessage, setErrorMessage }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation({ email:'', password:'' });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { email, password } = values;
        console.log('submit login');
        handleLogin(email, password);
    }

    useEffect(() => {
        setErrorMessage();
    }, [values]);

    return (
        <section className="authorization">
            <div className="authorization-head">
                < Logo />
                <h2 className="authorization-head__greeting">Рады видеть!</h2>
            </div>
            
            <form className="authorization__form" onSubmit={handleSubmit} noValidate>
                <fieldset className="authorization__fields">

                    <label htmlFor="auth-email" className="auth-label">E-mail</label>
                    <input 
                        id="auth-email"
                        name="email"
                        className="auth-field authorization__email"
                        type="email"
                        value={values["email"]}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    {errors["email"] && <span className='auth__error'>{errors["email"]}</span>}
                    
                    <label htmlFor="auth-password" className="auth-label">Пароль</label>
                    <input
                        id="auth-password"
                        name="password"
                        className="auth-field authorization__password"
                        type="password"
                        value={values["password"]}
                        onChange={handleChange}
                        required
                    />
                    {errors["password"] && <span className='auth__error'>{errors["password"]}</span>}
                    
                </fieldset>
                {(errorMessage) && <span className={`auth__error ${ isLoggedIn ? "auth__error_invisible" : "auth__error_visible" } `}>{errorMessage}</span>}
                <button type="submit" className="authorization__submit-button" disabled={!isValid}>Войти</button>
            </form>  
            <p className="authorization__under-form-line">Ещё не зарегистрированы?&nbsp;
                <Link to="/signup" className="authorization__under-form-link">Регистрация</Link>
            </p>
            
        </section>
    );
}