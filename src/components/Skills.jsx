import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/components/skills.css';

export const Skills = () => {
  
  const {darkTheme} = useContext(ThemeContext);
  
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
              <img alt="" src="/logo-html.png" />
              <p>HTML</p>
            </div>

            <div className='skills__logo'>
              <img alt="" src="/logo-css.png" />
              <p>CSS</p>
            </div>

            <div className='skills__logo'>
              <img alt="" src="/logo-javascript.png" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>


      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Libraries/Frameworks</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="/logo-jquery.png" />
            <p>jQuery</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-react.png" />
            <p>React</p>
          </div>

        </div>
      </div>


      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Test</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="/logo-jest.png" />
            <p>Jest</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-cypress.jpg" />
            <p>Cypress</p>
          </div>

        </div>
      </div>

      <div className={darkTheme === true ? 'skills__nes-container nes-container with-title is-centered skills__container-tools is-dark' : 'skills__nes-container nes-container with-title is-centered skills__container-tools'}>
        <p className="title">Other Tools</p>
        <div className='skills__container-images'>
          <div className='skills__logo'>
            <img alt="" src="/logo-eslint.png" />
            <p>ESLint</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-bootstrap.png" />
            <p>Bootstrap</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-npm.png" />
            <p>Npm</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-git.png" />
            <p>Git</p>
          </div>

          <div className='skills__logo'>
            <img alt="" src="/logo-github.png" />
            <p>GitHub</p>
          </div>

        </div>
      </div>
      <p className={darkTheme === true ? 'text-dark-theme' : ''}>and more...</p>
    </div>

  )
}
