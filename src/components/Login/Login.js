export default function Login() {
    <section className="login">
        <h2 className="login__greeting">Рады видеть!</h2>
        <form className="login__data">
            <input type="email" className="login__email" placeholder="Email"></input>
            <input type="password" className="login__password"></input>
            <button type="submit" className="login__login-button">Войти</button>
            <p className="login__change-to-login">Ещё не зарегистрированы? Регистрация</p>
        </form>
    </section>
}