import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img src="/user-image.jpg" alt="Aishwarya Bhoir" />
      </div>

      <div className="about-content">

        <p className="section-subtitle">Get To Know Me</p>

        <h1>About <span>Me</span></h1>

        <p>
          I'm Aishwarya Bhoir, a Computer Science graduate
          passionate about web development and software development.
        </p>

        <p>
          I enjoy creating responsive and user-friendly websites
          using modern web technologies. Currently, I'm learning
          Java Full Stack Development and improving my practical
          development skills.
        </p>

        <p>
          I'm a quick learner, self-motivated and always interested
          in learning new technologies and building real-world projects.
        </p>

        <div className="about-info">

          <div>
            <strong>Name:</strong>
            <span>Aishwarya Bhoir</span>
          </div>

          <div>
            <strong>Degree:</strong>
            <span>B.Sc. Computer Science</span>
          </div>

          <div>
            <strong>Role:</strong>
            <span>Java Full Stack Developer</span>
          </div>

          <div>
            <strong>Location:</strong>
            <span>Maharashtra, India</span>
          </div>

        </div>

        <a href="/resume.pdf" className="about-btn">
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default About;