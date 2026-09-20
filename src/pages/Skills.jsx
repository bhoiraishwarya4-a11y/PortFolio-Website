import "./Skills.css";

function Skills() {
  return (
    <section className="skills">

      <div className="skills-heading">
        <p>My Technical Skills</p>
        <h1>Skills & <span>Technologies</span></h1>
        <p className="skills-description">
          Technologies and tools I use to build modern and responsive
          web applications.
        </p>
      </div>


      <div className="skills-container">

        {/* Frontend */}

        <div className="skill-card">
          <h2>Frontend Development</h2>

          <div className="skill-list">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React JS</div>
            <div className="skill-item">Bootstrap</div>
          </div>
        </div>


        {/* Programming */}

        <div className="skill-card">
          <h2>Programming</h2>

          <div className="skill-list">
            <div className="skill-item">Java</div>
          </div>
        </div>


        {/* Database */}

        <div className="skill-card">
          <h2>Database</h2>

          <div className="skill-list">
            <div className="skill-item">SQL</div>
          </div>
        </div>


        {/* Tools */}

        <div className="skill-card">
          <h2>Tools & Technologies</h2>

          <div className="skill-list">
            <div className="skill-item">Git</div>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">VS Code</div>
            <div className="skill-item">MS Excel</div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;