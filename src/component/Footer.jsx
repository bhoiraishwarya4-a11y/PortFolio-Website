import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>
          Aishwarya<span>.</span>
        </h2>

        <p>
          Aspiring Java Full Stack Developer passionate
          about web development and learning new technologies.
        </p>


        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>


        <div className="social-links">

          <a href="#" target="_blank">
            GitHub
          </a>

          <a href="#" target="_blank">
            LinkedIn
          </a>

        </div>


        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Aishwarya Bhoir. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;