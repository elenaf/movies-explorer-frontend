export default function FilterCheckbox() {
    return (
        <section className="filter">
            <input id="short-films" className="short-films__filter_invisible" type="checkbox" value="short-films"/>
            <div className="short-films__filter_visible">
                <div className="short-films__filter-checker"></div>
            </div>
            
            <label for="short-films" className="short-films__filter-label">Короткометражки</label>
        </section>
    );
}