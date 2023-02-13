import '../styles/components/contact.css';

export const Contact = () => {
    return (
        <div id='contact__container'>
            <div id="contact__title">
                <span className="nes-text is-primary">#</span>
                <p>Contact</p>
            </div>

            <div id='contact__icons' class="nes-container with-title is-centered">
                <i class="nes-icon twitter is-large"></i>
                <i class="nes-icon instagram is-large"></i>
                <i class="nes-icon github is-large"></i>
                <i class="nes-icon gmail is-large"></i>
                <i class="nes-icon linkedin is-large"></i>
                <i class="nes-icon whatsapp is-large"></i>
            </div>

        </div>
    )
}
