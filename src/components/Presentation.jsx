import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/components/presentation.css';

export const Presentation = () => {

    const {darkTheme} = useContext(ThemeContext);
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
                            <img id='presentation__profile-picture' alt="Profile Picture" src="src/images/image-ramiro-lugo.jpg"></img>
                            <button type="button" className={hiddenBallon === true ? 'nes-btn is-disabled' : 'nes-btn is-success'} onClick={() => setHiddenBallon(true)}>Info</button>
                        </div>

                        <div id='presentation__right-container'>

                            <div id='presentation__ballon-left-first-container'>
                                <div id='presentation__ballon-left-first' className={darkTheme === true ? 'nes-balloon from-left animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-left animate__animated animate__fadeInUp'}>
                                    <p>
                                        Hi, I am <strong>Ramiro Lugo</strong>
                                    </p>
                                </div>
                            </div>

                            <div className={hiddenBallon ? 'presentation__ballon-right-container' : 'hidden'} >
                                <div id='presentation__ballon-right' className={darkTheme === true ? 'nes-balloon from-right animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-right animate__animated animate__fadeInUp'}>
                                    <p>Info</p>
                                </div>
                            </div>

                            <div className={hiddenBallon ? '' : 'hidden'}>
                                <div id='presentation__ballon-left-second' className={darkTheme === true ? 'nes-balloon from-left animate__animated animate__fadeInUp is-dark' : 'nes-balloon from-left animate__animated animate__fadeInUp'}>
                                    <p>
                                        An advanced systems engineering student of information and developer front-end, learning back-end and constantly acquiring new knowledge. For more info <a href="#contact__container">contact me.</a> 
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    :
                    <div id='presentation__profile-container'>

                        <img id='presentation__profile-picture' alt="Profile Picture" src="src/images/image-ramiro-lugo.jpg"></img>


                        <div id='presentation__description' className={darkTheme === true ? 'nes-container is-rounded is-dark' : 'nes-container is-rounded'}>
                            <p>Hi, I am <strong>Ramiro Lugo</strong>. An advanced systems engineering student of information and developer front-end, learning back-end and constantly acquiring new knowledge. For more info <a href="#contact__container">contact me.</a> </p>
                        </div>

                    </div>
            }

        </>





    )
}
