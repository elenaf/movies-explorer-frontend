export default function Profile() {
    <section className="profile">
        <h2 className="profile__greeting">Привет, Елена!</h2>
        <div className="profile__data">
            <div className="profile__name-field">Имя</div>
            <div className="profile__name">Елена</div>
            <div className="profile__email-field">E-mail</div>
            <div className="profile__email">pochta@yandex.ru</div>
        </div>
        <div className="profile__control-buttons">
            <p className="profile__edit-button">Редактировать</p>
            <p className="profile__signout-button">Выйти из аккаунта</p>
        </div>
    </section>
}