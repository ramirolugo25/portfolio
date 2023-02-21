import '../styles/components/header.css';

export const Header = ({onHandleTheme, darkTheme}) => {
  return (
    <div id='header__buttons'>
      <a href=""><button type="button" className="nes-btn is-primary">See CV</button></a>
      <a href=""><button type="button" className="nes-btn is-primary">Contact</button></a>
      <a><button type="button" className={darkTheme === true ? 'nes-btn is-warning' : 'nes-btn is-error'} onClick={onHandleTheme}>{darkTheme === true ? 'Turn on light' : 'Turn off light' }</button></a>
      
      
      
    </div>
  )
}
