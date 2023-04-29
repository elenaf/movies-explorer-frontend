import Navigation from "../Navigation/Navigation";

export default function NavigationPanel() {
    return(
        <section className="navigation-panel">
            < Navigation />
            <div className="navigation-panel__user-data">
                    <p className="navigation-panel__profile-link">Аккаунт</p>
                    <div className="navigation-panel__profile-icon"></div>
            </div>
        </section>
    );
}