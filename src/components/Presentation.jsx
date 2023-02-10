import { useState } from 'react';
import '../styles/components/presentation.css';

export const Presentation = () => {

    const [hiddenBallon, setHiddenBallon] = useState(false);

    return (
        <div className='profile-container'>
            
            <div className='image-container'>
                <img className='profile-picture' alt="Profile Picture" src="src/images/image-ramiro-lugo.jpg"></img>
                <button type="button" className="nes-btn is-success" onClick={() => setHiddenBallon(true)}>Info</button>
            </div>

            <div className='right-container'>
                
                <div className='ballon-left-first-container'>
                    <div id='ballon-left-first' className="nes-balloon from-left animate__animated animate__fadeInUp">
                        <p>
                            Hi, I am <strong>Ramiro Lugo</strong>
                        </p>
                    </div>
                </div>

                <div className={hiddenBallon ? 'ballon-right-container' : 'hidden'} >
                    <div id='ballon-right' className="nes-balloon from-right animate__animated animate__fadeInUp">
                        <p>Info</p>
                    </div>
                </div>

                <div className={hiddenBallon ? '' : 'hidden'}>
                    <div id='ballon-left-second' className="nes-balloon from-left animate__animated animate__fadeInUp">
                        <p className='presentation-text'>
                            An advanced systems engineering student of information and developer front-end, learning back-end and constantly acquiring new knowledge. For more info contact me.
                        </p>
                    </div>
                </div>
            
            </div>
        
        </div>

    )
}
