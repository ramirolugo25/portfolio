import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext';
import '../styles/components/header.css';

export const Header = () => {
  
  const {onHandleTheme, darkTheme} = useContext(ThemeContext);
  
  return (
    <div id='header__buttons'>
      <a href="https://docs.google.com/document/d/1L56H4Wkl9gQAYV7heDGdSKLg87OB-x-FVjN0WImdkRc/edit?usp=sharing" target='_blank'><button type="button" className="nes-btn is-primary">See Resume</button></a>
      <a href="#contact__container"><button type="button" className="nes-btn is-primary">Contact</button></a>
      <a><button type="button" className={darkTheme === true ? 'nes-btn is-warning' : 'nes-btn is-error'} onClick={onHandleTheme}>{darkTheme === true ? 'Turn on light' : 'Turn off light' }</button></a>
      
      
      
    </div>
  )
}
