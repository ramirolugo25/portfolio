import '../styles/components/contact.css';

export const Contact = ({darkTheme}) => {
    return (
        <div id='contact__container'>
            <div id="contact__title">
                <span className="nes-text is-primary">#</span>
                <p className={darkTheme === true ? 'text-dark-theme' : ''}>Contact</p>
            </div>

            <div id='contact__icons' className={darkTheme === true ? 'nes-container with-title is-centered is-dark' : 'nes-container with-title is-centered'}>
                <i className="nes-icon twitter is-medium"></i>
                <i className="nes-icon instagram is-medium"></i>
                <i className="nes-icon github is-medium"></i>
                <i className="nes-icon gmail is-medium"></i>
                <i className="nes-icon linkedin is-medium"></i>
                <i className="nes-icon whatsapp is-medium"></i>
            </div>

        </div>
    )
}
