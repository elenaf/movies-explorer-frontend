import { NavLink } from "react-router-dom";

export default function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__greeting">Привет, Елена!</h2>
            <div className="profile__data">
                <div className="profile__data-string">
                    <div className="profile__field profile__name-field">Имя</div>
                    <div className="profile__field-data profile__name">Елена</div>
                </div>
                <div className="profile__data-string">
                    <div className="profile__field profile__email-field">E-mail</div>
                    <div className="profile__field-data profile__email">pochta@yandex.ru</div>
                </div>
            </div>
            <div className="profile__control-buttons">
                <NavLink to="#" className="profile__control-button profile__edit-button">Редактировать</NavLink>
                <NavLink to="#" className="profile__control-button profile__signout-button">Выйти из аккаунта</NavLink>
            </div>
        </section>
    );
}