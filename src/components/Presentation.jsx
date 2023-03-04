import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/components/presentation.css';

export const Presentation = () => {

    const { darkTheme } = useContext(ThemeContext);
    const [hiddenBallon, setHiddenBallon] = useState(false);
    const [width, setWidth] = useState(window.outerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.outerWidth);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {
                width > 525
                    ?
                    <div id='presentation__profile-container'>

                        <div id='presentation__image-container'>
                            <img id='presentation__profile-picture' className={darkTheme ? 'presentation__white-border' : 'presentation__dark-border'} alt="Profile Picture" src={darkTheme ? '/image-ramiro-lugo-dark.jpg' : '/image-ramiro-lugo.jpg'}></img>
                            <button type="button" className={hiddenBallon ? 'nes-btn is-disabled' : 'nes-btn is-success'} onClick={() => setHiddenBallon(true)}>Info</button>
                        </div>

                        <div id='presentation__right-container'>

                            <div id='presentation__ballon-left-first-container'>
                                <div id='presentation__ballon-left-first' className={darkTheme ? 'nes-balloon from-left animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-left animate__animated animate__fadeInUp'}>
                                    <p>
                                        Hi, I am <strong>Ramiro Lugo</strong>
                                    </p>
                                </div>
                            </div>

                            <div className={hiddenBallon ? 'presentation__ballon-right-container' : 'hidden'} >
                                <div id='presentation__ballon-right' className={darkTheme ? 'nes-balloon from-right animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-right animate__animated animate__fadeInUp'}>
                                    <p>Info</p>
                                </div>
                            </div>

                            <div className={hiddenBallon ? '' : 'hidden'}>
                                <div id='presentation__ballon-left-second' className={darkTheme ? 'nes-balloon from-left animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-left animate__animated animate__fadeInUp'}>
                                    <p>
                                        Advanced information systems engineering student and front-end developer, learning back-end and constantly acquiring new knowledge. For more info <a href="#contact__container">contact me.</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    :
                    <div id='presentation__profile-container'>

                        <img id='presentation__profile-picture' className={darkTheme ? 'presentation__white-border' : 'presentation__dark-border'} alt="Profile Picture" src={darkTheme ? '/image-ramiro-lugo-dark.jpg' : '/image-ramiro-lugo.jpg'}></img>


                        <div id='presentation__description' className={darkTheme ? 'nes-container is-rounded is-dark' : 'nes-container is-rounded'}>
                            <p>Hi, I am <strong>Ramiro Lugo</strong>. Advanced information systems engineering student and front-end developer, learning back-end and constantly acquiring new knowledge. For more info <a href="#contact__container">contact me.</a> </p>
                        </div>

                    </div>
            }

        </>





    )
}
