import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/components/contact.css';

export const Contact = () => {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div id='contact__container'>
            <div id="contact__title">
                <span className="nes-text is-primary">#</span>
                <p className={darkTheme ? 'text-dark-theme' : ''}>Contact</p>
            </div>

            <div id='contact__icons' className={darkTheme ? 'nes-container with-title is-centered is-dark' : 'nes-container with-title is-centered'}>
                <a href="https://github.com/ramirolugo25" target='_blank'><i className="nes-icon github is-medium"></i></a>
                <a href="mailto:ramirolugo2525@gmail.com" target='_blank'><i className="nes-icon gmail is-medium"></i></a>
                <a href="https://www.linkedin.com/in/ramiro-lugo/" target='_blank'><i className="nes-icon linkedin is-medium"></i></a>
                <a href="https://wa.me/qr/K2A65Q5MTI62A1" target='_blank'><i className="nes-icon whatsapp is-medium"></i></a>
            </div>

        </div>
    )
}
