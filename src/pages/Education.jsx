import "./Education.css";

function Education() {
  const education = [
    {
      year: "2023 - 2026",
      degree: "B.Sc. Computer Science",
      college: "College of Computer Science",
      result: "Computer Science Graduate",
    },

    {
      year: "2021 - 2023",
      degree: "Higher Secondary Certificate (HSC)",
      college: "Alard College",
      result: "80%",
    },

    {
      year: "2021",
      degree: "Secondary School Certificate (SSC)",
      college: "Alard School",
      result: "60%",
    },
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      organization: "Learning / Training",
    },

    {
      title: "Web Development",
      organization: "HTML, CSS, JavaScript & React JS",
    },

    {
      title: "Git & GitHub",
      organization: "Version Control & Project Management",
    },
  ];

  return (
    <section className="education">

      {/* Heading */}

      <div className="education-heading">
        <p>My Academic Journey</p>

        <h1>
          Education & <span>Certifications</span>
        </h1>

        <p className="education-description">
          My educational background and professional learning journey.
        </p>
      </div>


      {/* Education */}

      <div className="education-section">

        <h2 className="sub-heading">
          Education
        </h2>

        <div className="timeline">

          {education.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.degree}</h3>

                <h4>{item.college}</h4>

                <p>{item.result}</p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Certifications */}

      <div className="certification-section">

        <h2 className="sub-heading">
          Certifications & Training
        </h2>

        <div className="certification-container">

          {certifications.map((item, index) => (

            <div className="certification-card" key={index}>

              <div className="certificate-icon">
                ✓
              </div>

              <h3>{item.title}</h3>

              <p>{item.organization}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;