import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Software Developer Portfolio</p>
          <h1>Sunidhi Girish</h1>
          <p className="hero-description">
            Aspiring software developer with experience in full-stack web applications,
            image processing, and database-driven systems. Skilled in Python, Java Spring,
            Flask, MySQL, and modern web technologies.
          </p>
          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Internship</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Certifications</span>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button primary">View Projects</a>
            <a href="#contact" className="button secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-title">Contact</div>
          <div className="contact-list">
            <div>
              <strong>Email</strong>
              <a href="mailto:sunidhigirishk@gmail.com">sunidhigirishk@gmail.com</a>
            </div>
            <div>
              <strong>Phone</strong>
              <a href="tel:+919483948216">+91 94839 48216</a>
            </div>
            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/sunidhi-girish-2884a6299" target="_blank" rel="noreferrer">
                linkedin.com/in/sunidhi-girish-2884a6299
              </a>
            </div>
            <div>
              <strong>GitHub</strong>
              <a href="https://github.com/SunidhiGirish" target="_blank" rel="noreferrer">
                github.com/SunidhiGirish
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-header">
            <span className="section-label">About</span>
            <h2>Career objective</h2>
          </div>
          <p className="section-text">
            To secure an opportunity that allows me to utilize my software development skills,
            explore modern technologies, and work on solutions that improve efficiency and user experience.
            I am eager to learn, adapt, and contribute to the organization's long-term goals.
          </p>
        </section>

        <section className="grid two-column">
          <div className="section card-panel">
            <div className="section-header">
              <span className="section-label">Education</span>
              <h2>Academic background</h2>
            </div>
            <div className="timeline-item">
              <h3>N.M.A.M Institute of Technology, Nitte</h3>
              <p>Bachelor of Engineering (ongoing)</p>
            </div>
            <div className="timeline-item">
              <h3>Expert Pre-University, Valachil, Mangalore</h3>
              <p>Pre-University College</p>
            </div>
          </div>

          <div className="section card-panel">
            <div className="section-header">
              <span className="section-label">Skills</span>
              <h2>Technical strengths</h2>
            </div>
            <div className="skill-grid">
              <div className="skill-block">
                <strong>Programming</strong>
                <p>Python, C, C++, Java Spring, JavaScript, R</p>
              </div>
              <div className="skill-block">
                <strong>Web</strong>
                <p>HTML, CSS, Flask, Spring Boot</p>
              </div>
              <div className="skill-block">
                <strong>Database</strong>
                <p>MySQL, SQL</p>
              </div>
              <div className="skill-block">
                <strong>Tools</strong>
                <p>Unix, Git, OpenCV</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <span className="section-label">Projects</span>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-tag">September 2025 - November 2025</div>
              <h3>Movie Ticket Booking System</h3>
              <p>Spring Boot, MySQL</p>
              <p>
                Developed a movie ticket booking application in a team of four with features for movie browsing,
                showtime selection, seat booking, and ticket confirmation.
              </p>
            </article>
            <article className="project-card">
              <div className="project-tag">March 2025 - April 2025</div>
              <h3>Pharmacy Hub</h3>
              <p>Flask, MySQL, HTML/CSS</p>
              <p>
                Built a full-stack pharmacy management web app with user authentication, medicine browsing,
                cart management, and order history using Flask and MySQL.
              </p>
            </article>
            <article className="project-card">
              <div className="project-tag">November 2023 - June 2024</div>
              <h3>Rice Image Analysis</h3>
              <p>Python, OpenCV</p>
              <p>
                Processed rice grain images using OpenCV to extract features and analyze different rice varieties
                in a team of six.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-label">Experience</span>
            <h2>Internship</h2>
          </div>
          <div className="experience-card">
            <h3>Optimum Codes LLP</h3>
            <p>June 2025 - August 2025</p>
            <p>
              Worked as an intern on a mental health application designed to support users by connecting them with verified therapists.
              Collaborated with the team to develop API endpoints, database schemas, and validation systems.
            </p>
          </div>
        </section>

        <section className="grid two-column">
          <div className="section card-panel">
            <div className="section-header">
              <span className="section-label">Certifications</span>
              <h2>Professional learning</h2>
            </div>
            <ul className="bullet-list">
              <li>Participated in Tesc EmpowHer (8th March 2025)</li>
              <li>Learn Ethical Hacking From Scratch 2024 (15.5 hours)</li>
              <li>Cybersecurity and privacy, NPTEL Course (12 weeks), IIT Madras</li>
              <li>Introduction to Artificial Intelligence, Great Learning App (8 hours)</li>
            </ul>
          </div>

          <div className="section card-panel">
            <div className="section-header">
              <span className="section-label">Interests</span>
              <h2>Personal strengths</h2>
            </div>
            <div className="chip-list">
              <span>Problem-solving</span>
              <span>Teamwork</span>
              <span>Time Management</span>
              <span>Classical Dance</span>
              <span>Listening to Music</span>
              <span>Drawing</span>
              <span>Driving</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2>Let’s connect</h2>
          </div>
          <p className="section-text">
            I am available for internships and early-career opportunities in software development.
            Feel free to reach out for collaboration or project work.
          </p>
          <div className="contact-cards">
            <div className="callout-card">
              <h3>Reach out</h3>
              <a href="mailto:sunidhigirishk@gmail.com">sunidhigirishk@gmail.com</a>
              <a href="tel:+919483948216">+91 94839 48216</a>
            </div>
            <div className="callout-card">
              <h3>Connect online</h3>
              <a href="https://www.linkedin.com/in/sunidhi-girish-2884a6299" target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
              <a href="https://github.com/SunidhiGirish" target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
