import '../styles/components/header.css';

export const Header = () => {
  return (
    <div id='header__buttons'>
      <button type="button" className="nes-btn is-primary">About me</button>
      <button type="button" className="nes-btn is-primary">Skills</button>
      <button type="button" className="nes-btn is-primary">Projects</button>
      <button type="button" className="nes-btn is-primary">Contact</button>
    </div>
  )
}
