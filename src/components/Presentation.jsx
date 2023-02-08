import '../styles/components/presentation.css';

export const Presentation = () => {
    return (
        <div id='profile-container'>
            <img id='profile-picture' alt="Profile Picture" src="src/images/image-ramiro-lugo.jpg"></img>

            <div className="nes-balloon from-left">
                <p id='presentation-text'>
                    Hi, I am <strong> Ramiro Lugo </strong> 
                </p>
            </div>
        </div>

    )
}
