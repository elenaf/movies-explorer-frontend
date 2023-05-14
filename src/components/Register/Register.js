import './Register.css';

import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useFormWithValidation } from '../../utils/useForm';

export default function Register({ handleRegister, isRegOk }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({ name:'', email:'', password:'' });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, email, password } = values;
        handleRegister(name, email, password);

    }

    return (
        <section className="authorization">
            <div className="authorization-head">
                < Logo />
                <h2 className="authorization-head__greeting">Добро пожаловать!</h2>
            </div>
            
            <form className="authorization__form" onSubmit={handleSubmit} noValidate>
                <fieldset className="authorization__fields">
                    <label htmlFor="auth-name" className="auth-label">Имя</label>
                    <input 
                        id="auth-name"
                        name="name"
                        className="auth-field authorization__name"
                        type="text"
                        value={values["name"]}
                        onChange={handleChange}
                        placeholder="Имя"
                        required
                    />
                    {errors["name"] && <span className='auth__error'>{errors["name"]}</span>}
                    
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
                <span className={`auth__error ${ isRegOk ? "auth__error_invisible" : "auth__error_visible" }` }>Что-то пошло не так...</span>
                <button type="submit" className="authorization__submit-button" disabled={!isValid}>Зарегистрироваться</button>
            </form>  
            <p className="authorization__under-form-line">Уже зарегистрированы?&nbsp;
                <Link to="/signin" className="authorization__under-form-link">Войти</Link>
            </p>
            
        </section>
    );
}
