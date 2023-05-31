import './InfoPopup.css'

export default function InfoPopup(props) {
    const { children, isOpen, setIsOpen } = props;

    const handleExitClick = () => {
        setIsOpen(false);
    }

    return (
        <div  className={ `info-popup ${ isOpen ? "info-popup_opened" : "" }` }>
            <button className="info-popup__button-close" onClick={handleExitClick}></button>
            {children}
        </div>
    );
}