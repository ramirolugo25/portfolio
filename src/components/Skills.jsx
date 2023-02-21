import '../styles/components/skills.css';

export const Skills = ({darkTheme}) => {
  return (
    <div id='skills__container-skills'>
      <div id="skills__title" className={darkTheme === true ? 'text-dark-theme' : ''}>
        <span className="nes-text is-primary">#</span>
        <p>Skills</p>
      </div>

      <div id='skills__first-container'>
        <div id='skills__icons-container'>
          <i className="nes-mario"></i>
          <i className="nes-icon coin is-large"></i>
        </div>
        

        <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
          <p className="title">Main Tools</p>
          <div className='skills__container-images'>
            <div className='skills__logo'>
              <img alt="" src="src/images/logo-html.png" />
              <p>HTML</p>
            </div>

            <div className='skills__logo'>
              <img alt="" src="src/images/logo-css.png" />
              <p>CSS</p>
            </div>

            <div className='skills__logo'>
              <img alt="" src="src/images/logo-javascript.png" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>


      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Libraries/Frameworks</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="src/images/logo-jquery.png" />
            <p>jQuery</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-react.png" />
            <p>React</p>
          </div>

        </div>
      </div>


      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Test</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="src/images/logo-jest.png" />
            <p>Jest</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-cypress.jpg" />
            <p>Cypress</p>
          </div>

        </div>
      </div>

      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Other Tools</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="src/images/logo-eslint.png" />
            <p>ESLint</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-bootstrap.png" />
            <p>Bootstrap</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-npm.png" />
            <p>Npm</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-git.png" />
            <p>Git</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="src/images/logo-github.png" />
            <p>GitHub</p>
          </div>

        </div>
      </div>
      <p className={darkTheme === true ? 'text-dark-theme' : ''}>and more...</p>
    </div>

  )
}
