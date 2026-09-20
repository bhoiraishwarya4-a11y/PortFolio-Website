import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "TaskFlow To-Do Manager",
      description:
        "A responsive task management application where users can add, search and delete tasks.",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      github: "#",
      live: "#",
    },

    {
      title: "E-Commerce Website",
      description:
        "A responsive static e-commerce website with separate sections for Men, Women and Kids.",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      github: "#",
      live: "#",
    },

    {
      title: "Burger King Website",
      description:
        "A multi-page responsive food website with Home, Menu, Offers and Contact sections.",
      technologies: "HTML, CSS, JavaScript",
      github: "#",
      live: "#",
    },

    {
      title: "Student Registration Form",
      description:
        "A student registration form designed to collect and manage student information.",
      technologies: "HTML, CSS, JavaScript",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects">

      {/* Heading */}

      <div className="projects-heading">
        <p>My Recent Work</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="projects-description">
          Here are some of the projects I have created while
          learning and improving my development skills.
        </p>
      </div>


      {/* Project Cards */}

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h2>{project.title}</h2>

            <p className="project-description">
              {project.description}
            </p>

            <p className="technologies">
              <strong>Technologies:</strong>
              <br />
              {project.technologies}
            </p>

            <div className="project-buttons">

              <a href={project.github}>
                GitHub
              </a>

              <a href={project.live}>
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;