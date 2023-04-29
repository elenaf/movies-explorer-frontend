export default function Register() {
    <section className="register">
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__data">
            <input type="text" className="register__name" placeholder="Имя">Имя</input>
            <input type="email" className="register__email" placeholder="Email"></input>
            <input type="password" className="register__password"></input>
            <button type="submit" className="register__register-button">Зарегистрироваться</button>
            <p className="register__change-to-login">Уже зарегистрированы? Войти</p>
        </form>
    </section>
}