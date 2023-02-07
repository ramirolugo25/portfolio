import '../styles/components/skills.css';

export const Skills = () => {
  return (
    <div>
      <div id="skills-title">
        <span className="nes-text is-primary">#</span>
        <p>Skills</p>
      </div>

      <div className="nes-container with-title is-centered">
        <p className="title">Tools</p>
        <div>
          <img className="nes-avatar is-large" alt="" src="src/images/logo-javascript.png" style={{imageRendering: "pixelated"}}/>
          <p>JavaScript</p>
        </div>
        
      
      </div>
    </div>

  )
}
