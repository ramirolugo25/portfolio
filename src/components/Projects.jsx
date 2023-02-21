import '../styles/components/projects.css';

export const Projects = ({darkTheme}) => {
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
                            <img src="src/images/logo-marvel.png" alt="Logo Marvel" />
                            <p>Marvel Comics</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>

                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="src/images/logo-pokedex.png" alt="Logo Pokédex" />
                            <p>Pokédex</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="src/images/logo-thesimpsons.png" alt="Logo The Simpsons" />
                            <p>Memotest</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="src/images/logo-youtube.png" alt="Logo YouTube" />
                            <p>YouTube Clone</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="src/images/logo-simon-dice.png" alt="Logo Simon dice" />
                            <p>Simon Dice</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div id='projects__exchange-house-container' className={darkTheme === true ? 'projects__project-container projects__project-container-white-border' : 'projects__project-container projects__project-container-black-border'}>
                        <div>
                            <img src="src/images/logo-dollar.png" alt="Logo Dollar" />
                            <p>Exchange house</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-primary">Deploy</span>
                            </a>
                            <a href="#" className="nes-badge projects__badge">
                                <span className="is-success">Repository</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
