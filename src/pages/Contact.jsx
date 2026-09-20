import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      {/* Heading */}

      <div className="contact-heading">

        <p>Get In Touch</p>

        <h1>
          Contact <span>Me</span>
        </h1>

        <p className="contact-description">
          Have a question or want to work together?
          Feel free to get in touch with me.
        </p>

      </div>


      {/* Contact Container */}

      <div className="contact-container">


        {/* Contact Information */}

        <div className="contact-info">

          <h2>Let's Connect</h2>

          <p>
            I'm always open to discussing new opportunities,
            projects and ideas.
          </p>


          <div className="contact-item">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>
              <p>your-email@gmail.com</p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              in
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/your-profile</p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              GH
            </div>

            <div>
              <h3>GitHub</h3>
              <p>github.com/your-username</p>
            </div>

          </div>

        </div>


        {/* Contact Form */}

        <form className="contact-form">

          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />

          </div>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>


          <div className="input-group">

            <label>Subject</label>

            <input
              type="text"
              placeholder="Enter subject"
            />

          </div>


          <div className="input-group">

            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

          </div>


          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;