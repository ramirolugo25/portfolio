import '../styles/components/projects.css';

export const Projects = () => {
    return (

        <div>

            <div id="projects__title">
                <span className="nes-text is-primary">#</span>
                <p>Projects</p>
            </div>

            <div id='projects__main-container'>

                <div id='projects__icons-container'>
                    <i class="nes-ash"></i>
                    <i class="nes-pokeball"></i>
                </div>

                <div id='projects__container' className="nes-container with-title is-centered">

                    <div className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-marvel.png" alt="Logo Marvel" />
                            <p>Marvel Comics</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>

                    <div className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-pokedex.png" alt="Logo Pokédex" />
                            <p>Pokédex</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-thesimpsons.png" alt="Logo The Simpsons" />
                            <p>Memotest</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-youtube.png" alt="Logo YouTube" />
                            <p>YouTube Clone</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-simon-dice.png" alt="Logo Simon dice" />
                            <p>Simon Dice</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>


                    <div id='projects__exchange-house-container' className='projects__project-container'>
                        <div>
                            <img src="src/images/logo-dollar.png" alt="Logo Dollar" />
                            <p>Exchange house</p>
                        </div>
                        <div className='projects__bottom-container'>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-primary">Deploy</span>
                            </a>
                            <a href="#" class="nes-badge projects__badge">
                                <span class="is-success">Repository</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
