import '../styles/components/proyects.css';

export const Projects = () => {
    return (

        <div>
            <div id="projects-title">
                <span className="nes-text is-primary">#</span>
                <p>Project</p>
            </div>

            <div id='projects-container' className="nes-container with-title is-centered">
                
                <div className='project-container'>

                </div>
                <div id='pokedex-container' className='project-container'>
                    <i className="nes-pokeball"></i>
                    <p>Pokédex</p>
                </div>
                <div id='memotest-container' className='project-container'>
                    <img src="src/images/logo-thesimpsons.png" alt="" />
                    <p>Memotest</p>
                </div>
                <div id='youtube-container' className='project-container'>
                    <img src="src/images/logo-youtube.png" alt="" />
                    <p>Youtube Clone</p>
                </div>
                <div className='project-container'>
                    
                </div>
                <div className='project-container'>
                    
                </div>
            </div>
        </div>



    )
}
