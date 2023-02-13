import { useState } from 'react';
import '../styles/components/presentation.css';

export const Presentation = () => {

    const [hiddenBallon, setHiddenBallon] = useState(false);

    return (
        <div id='presentation__profile-container'>
            
            <div id='presentation__image-container'>
                <img id='presentation__profile-picture' alt="Profile Picture" src="src/images/image-ramiro-lugo.jpg"></img>
                <button type="button" className="nes-btn is-success" onClick={() => setHiddenBallon(true)}>Info</button>
            </div>

            <div id='presentation__right-container'>
                
                <div id='presentation__ballon-left-first-container'>
                    <div id='presentation__ballon-left-first' className="nes-balloon from-left animate__animated animate__fadeInUp">
                        <p>
                            Hi, I am <strong>Ramiro Lugo</strong>
                        </p>
                    </div>
                </div>

                <div className={hiddenBallon ? 'presentation__ballon-right-container' : 'hidden'} >
                    <div id='presentation__ballon-right' className="nes-balloon from-right animate__animated animate__fadeInUp">
                        <p>Info</p>
                    </div>
                </div>

                <div className={hiddenBallon ? '' : 'hidden'}>
                    <div id='presentation__ballon-left-second' className="nes-balloon from-left animate__animated animate__fadeInUp">
                        <p>
                            An advanced systems engineering student of information and developer front-end, learning back-end and constantly acquiring new knowledge. For more info contact me.
                        </p>
                    </div>
                </div>
            
            </div>
        
        </div>

    )
}
