import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/components/projects.css';

export const Projects = () => {
    
    const {darkTheme} = useContext(ThemeContext);
    
    return (

        <div>

            <div id="projects__title" className={darkTheme === true ? 'text-dark-theme' : ''}>
                <span className="nes-text is-primary">#</span>
                <p>Projects</p>
            </div>

            <div id='projects__main-container'>

                <div id='projects__icons-container'>
                    <i className="nes-ash"></i>
                    <i className="nes-pokeball"></i>
                </div>

                <div id='projects__container' className={darkTheme === true ? 'nes-container with-title is-centered is-dark' : 'nes-container with-title is-centered'}>

                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-marvel.png" alt="Logo Marvel" />
                            <p>Marvel Comics</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://marvel-comics-rl.netlify.app/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/Marvel-Comics" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>

                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-pokedex.png" alt="Logo Pokédex" />
                            <p>Pokédex</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://ramirolugo25.github.io/Pokedex/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/Pokedex" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-thesimpsons.png" alt="Logo The Simpsons" />
                            <p>Memotest</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://ramirolugo25.github.io/Memotest/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/Memotest" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-youtube.png" alt="Logo YouTube" />
                            <p>YouTube Clone</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://ramirolugo25.github.io/YouTube-Responsive/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/YouTube-Responsive" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-simon-dice.png" alt="Logo Simon dice" />
                            <p>Simon Dice</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://ramirolugo25.github.io/Simon-dice/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/Simon-dice" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div id='projects__exchange-house-container' className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="/logo-dollar.png" alt="Logo Dollar" />
                            <p>Exchange house</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="https://ramirolugo25.github.io/Casa-De-Cambio/" target='_blank' className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="https://github.com/ramirolugo25/Casa-De-Cambio" target='_blank' className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
