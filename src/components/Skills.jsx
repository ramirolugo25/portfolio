import '../styles/components/skills.css';

export const Skills = () => {
  return (
    <div className='container-skills'>
      <div className="skills-title">
        <span className="nes-text is-primary">#</span>
        <p> Skills</p>
      </div>

      <div className='first-container'>
        <i class="nes-mario"></i>

        <div className="nes-container with-title is-centered container-tools">
          <p className="title">Main Tools</p>
          <div className='container-images'>
            <div className='logo'>
              <img alt="" src="src/images/logo-html.png" />
              <p>HTML</p>
            </div>

            <div className='logo'>
              <img alt="" src="src/images/logo-css.png" />
              <p>CSS</p>
            </div>

            <div className='logo'>
              <img alt="" src="src/images/logo-javascript.png" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>


      <div className="nes-container with-title is-centered container-tools">
        <p className="title">Libraries/Frameworks</p>
        <div className='container-images'>
          <div className='logo'>
            <img alt="" src="src/images/logo-jquery.png" />
            <p>jQuery</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-react.png" />
            <p>React</p>
          </div>

        </div>
      </div>


      <div className="nes-container with-title is-centered container-tools">
        <p className="title">Test</p>
        <div className='container-images'>
          <div className='logo'>
            <img alt="" src="src/images/logo-jest.png" />
            <p>Jest</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-cypress.jpg" />
            <p>Cypress</p>
          </div>

        </div>
      </div>

      <div className="nes-container with-title is-centered container-tools">
        <p className="title">Other Tools</p>
        <div className='container-images'>
          <div className='logo'>
            <img alt="" src="src/images/logo-eslint.png" />
            <p>ESLint</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-bootstrap.png" />
            <p>Bootstrap</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-npm.png" />
            <p>Npm</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-git.png" />
            <p>Git</p>
          </div>

          <div className='logo'>
            <img alt="" src="src/images/logo-github.png" />
            <p>GitHub</p>
          </div>

        </div>
      </div>
      <p>and more...</p>
    </div>

  )
}
