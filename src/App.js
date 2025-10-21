import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter, 
  FaEnvelope, 
  FaInstagram,
  FaFacebook,
  FaStackOverflow,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaCamera,
  FaBook,
  FaLocationDot,
  FaMotorcycle
} from 'react-icons/fa6';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Loading state management
  useEffect(() => {
    const handleLoad = () => {
      // Add fade-out class before removing loader
      const loaderElement = document.querySelector('.loader-overlay');
      if (loaderElement) {
        loaderElement.classList.add('fade-out');
      }
      
      // Remove loader after fade-out animation
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Time for fade-out animation
    };

    // Wait for all resources to load, then show loader for minimum time
    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 1200);
    } else {
      window.addEventListener('load', () => {
        setTimeout(handleLoad, 1200);
      });
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Auto-typing animation
  useEffect(() => {
    const textToType = `Building scalable enterprise solutions at WalmartLabs.

Expertise:
• Software Architecture & System Design
• Performance Optimization & Scalability  
• Cloud Solutions & DevOps
• Enterprise Application Development

Beyond Code:
• Exploring 15+ countries 🌍
• Motorcycle adventures 🏍️
• Photography enthusiast 📸

Status: Ready for new challenges!
Contact: sitakanta.chaudhury@example.com`;

    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
      let index = 0;
      const typeWriter = () => {
        if (index < textToType.length) {
          typingElement.textContent += textToType.charAt(index);
          index++;
          setTimeout(typeWriter, 40); // Typing speed
        }
      };
      
      // Start typing after a delay
      setTimeout(typeWriter, 2000);
    }
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader-container">
            <div className="loader-logo">
              <div className="logo-text">SC</div>
              <div className="logo-subtitle">My Creative Space</div>
            </div>
            <div className="loader-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
            <div className="loader-text">
              <div className="loading-message">Loading Portfolio...</div>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="loader-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">My Creative Space</div>
          <ul className="nav-menu">
            <li onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About Me
            </li>
            <li onClick={() => scrollToSection('career')} className={activeSection === 'career' ? 'active' : ''}>
              Career
            </li>
            <li onClick={() => scrollToSection('hobbies')} className={activeSection === 'hobbies' ? 'active' : ''}>
              Hobbies
            </li>
            <li onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="floating-elements">
            <div className="float-element element-1">{ }</div>
            <div className="float-element element-2">[ ]</div>
            <div className="float-element element-3">&lt; /&gt;</div>
            <div className="float-element element-4">{ }</div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="fullscreen-terminal">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <div className="terminal-title">sitakanta@developer:~$ - Welcome to my digital workspace</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">sitakanta@developer:~$</span>
                <span className="command">whoami</span>
              </div>
              <div className="terminal-output">
                <div className="output-line">Sitakanta Chaudhury</div>
                <div className="output-line">Staff Engineer (Software Architect)</div>
                <div className="output-line">@WalmartLabs, Bangalore</div>
              </div>
              
              <div className="terminal-line">
                <span className="prompt">sitakanta@architect:~$</span>
                <span className="command">cat role.txt</span>
              </div>
              <div className="terminal-output">
                <div className="output-line">Developer | Architect | Traveller | Biker</div>
              </div>
              
              <div className="terminal-line">
                <span className="prompt">sitakanta@architect:~$</span>
                <span className="command">ls skills/</span>
              </div>
              <div className="terminal-output">
                <div className="output-line">software-architecture.md</div>
                <div className="output-line">system-design.md</div>
                <div className="output-line">performance-optimization.md</div>
                <div className="output-line">cloud-solutions.md</div>
                <div className="output-line">devops.md</div>
              </div>
              
              <div className="terminal-line">
                <span className="prompt">sitakanta@architect:~$</span>
                <span className="command">cat about.txt</span>
              </div>
              <div className="terminal-output">
                <div className="terminal-text" id="typing-text"></div>
                <div className="terminal-cursor">█</div>
              </div>
              
              <div className="terminal-actions">
                <div className="action-line">
                  <span className="prompt">sitakanta@architect:~$</span>
                  <button className="terminal-button" onClick={() => scrollToSection('about')}>
                    ./view_profile.sh
                  </button>
                  <button className="terminal-button" onClick={() => scrollToSection('contact')}>
                    ./contact.sh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Discover More</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="profile-container">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Professional headshot" 
                  className="profile-image"
                />
              </div>
            </div>
            <div className="about-text">
              <h3>Software Architect & Technology Leader</h3>
              <p>
                I am a passionate technologist dedicated to harnessing technology for the greater good. 
                I thrive on exploring innovative solutions and empowering teams to leverage cutting-edge 
                technology in their creative endeavors, driving meaningful impact across organizations.
              </p>
              <p>
                My career journey began as an Associate and has evolved to a Software Architect role, 
                with comprehensive expertise spanning Development, System Design, DevOps, and Performance 
                Optimization. I specialize in bottleneck identification and performance tuning across 
                all application stack layers—middleware, database, and network infrastructure.
              </p>
              <p>
                From requirement gathering and technical specifications to deployment and production 
                management, I design and implement enterprise-grade applications. I focus on delivering 
                cost-effective, scalable solutions, particularly when architecting cloud-native systems 
                and leading digital transformation initiatives.
              </p>
              <p>
                Currently serving as Staff Engineer (Software Architect) at <strong>@WalmartLabs</strong> in Bangalore, where I continue to drive innovation and technical excellence at scale.
              </p>
              <div className="skills">
                <span className="skill-tag">Software Architecture</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Cloud Solutions</span>
                <span className="skill-tag">Enterprise Applications</span>
                <span className="skill-tag">System Design</span>
                <span className="skill-tag">Technical Leadership</span>
                <span className="skill-tag">Scalability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="section career-section">
        <div className="container">
          <h2 className="section-title">Career</h2>
          <p className="section-subtitle">10+ Years of Growth & Future Aspirations</p>
          
          <div className="career-roadmap">
            <div className="roadmap-timeline">
              <div className="timeline-track"></div>
              
              {/* Education Phase */}
              <div className="career-phase education-phase">
                <div className="phase-header">
                  <div className="phase-icon">
                    <FaGraduationCap />
                  </div>
                  <h3>Foundation</h3>
                  <span className="phase-years">2008-2012</span>
                </div>
                <div className="phase-content">
                  <div className="milestone">
                    <h4>B.Tech ECE</h4>
                    <p>Engineering Foundation</p>
                  </div>
                </div>
              </div>

              {/* Learning Phase */}
              <div className="career-phase learning-phase">
                <div className="phase-header">
                  <div className="phase-icon">
                    <FaBook />
                  </div>
                  <h3>Skill Building</h3>
                  <span className="phase-years">2012-2013</span>
                </div>
                <div className="phase-content">
                  <div className="milestone">
                    <h4>Self Development</h4>
                    <p>Java, Spring, Web Technologies</p>
                  </div>
                </div>
              </div>

              {/* Developer Phase */}
              <div className="career-phase developer-phase">
                <div className="phase-header">
                  <div className="phase-icon">
                    <FaCode />
                  </div>
                  <h3>Developer</h3>
                  <span className="phase-years">2013-2018</span>
                </div>
                <div className="phase-content">
                  <div className="milestone">
                    <h4>Harman</h4>
                    <p>Ecommerce and HEDM</p>
                  </div>
                  <div className="milestone">
                    <h4>HPE R&D</h4>
                    <p>Innovation & Research</p>
                  </div>
                </div>
              </div>

              {/* Senior Developer Phase */}
              <div className="career-phase senior-phase">
                <div className="phase-header">
                  <div className="phase-icon">
                    <FaBriefcase />
                  </div>
                  <h3>Senior Engineer</h3>
                  <span className="phase-years">2018-2022</span>
                </div>
                <div className="phase-content">
                  <div className="milestone">
                    <h4>IBM</h4>
                    <p>Enterprise Solutions</p>
                  </div>
                  <div className="milestone">
                    <h4>WalmartLabs</h4>
                    <p>Software Engineer III → Sr. Engineer</p>
                  </div>
                </div>
              </div>

              {/* Current Phase */}
              <div className="career-phase current-phase active">
                <div className="phase-header">
                  <div className="phase-icon">
                    <FaBriefcase />
                  </div>
                  <h3>Staff Engineer</h3>
                  <span className="phase-years">2022-Present</span>
                </div>
                <div className="phase-content">
                  <div className="milestone current">
                    <h4>WalmartLabs</h4>
                    <p>Architecture & Technical Leadership</p>
                    <div className="achievement-tags">
                      <span className="tag">10M+ Transactions</span>
                      <span className="tag">20+ Team Members</span>
                      <span className="tag">System Design</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Skills Evolution */}
            <div className="skills-evolution">
              <h3>Skills Evolution Timeline</h3>
              <div className="skills-track">
                <div className="skill-category" data-years="2008-2013">
                  <h4>Foundation</h4>
                  <div className="skills">
                    <span>Electronics</span>
                    <span>C/C++</span>
                    <span>Java</span>
                  </div>
                </div>
                <div className="skill-category" data-years="2013-2018">
                  <h4>Development</h4>
                  <div className="skills">
                    <span>Spring</span>
                    <span>Web Technologies</span>
                    <span>Embedded Systems</span>
                  </div>
                </div>
                <div className="skill-category" data-years="2018-2022">
                  <h4>Scaling</h4>
                  <div className="skills">
                    <span>Microservices</span>
                    <span>Cloud</span>
                    <span>DevOps</span>
                  </div>
                </div>
                <div className="skill-category active" data-years="2022-Now">
                  <h4>Leadership</h4>
                  <div className="skills">
                    <span>Architecture</span>
                    <span>Team Leadership</span>
                    <span>System Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="section hobbies-section">
        <div className="container">
          <h2 className="section-title">My Hobbies</h2>
          <p className="section-subtitle">What I love doing in my free time</p>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-icon">
                <FaCamera />
              </div>
              <h3>Photography</h3>
              <p>Capturing moments and telling stories through the lens. Love exploring landscapes and street photography.</p>
            </div>
            
            <div className="hobby-card">
              <div className="hobby-icon">
                <FaLocationDot />
              </div>
              <h3>Travelling</h3>
              <p>Exploring new destinations and experiencing diverse cultures. Every journey brings new perspectives and unforgettable memories.</p>
            </div>
            
            <div className="hobby-card">
              <div className="hobby-icon">
                <FaMotorcycle />
              </div>
              <h3>Biking</h3>
              <p>Passionate about motorcycles and the freedom of the open road. Love long rides and exploring scenic routes on two wheels.</p>
            </div>
            
            <div className="hobby-card">
              <div className="hobby-icon">
                <FaBook />
              </div>
              <h3>Reading</h3>
              <p>Diving into books on technology, philosophy, and science fiction. Always learning something new.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Find me on social media or send me a message</p>
          <div className="social-grid">
            <a href="https://github.com/cooligc" target="_blank" rel="noopener noreferrer" className="social-card github">
              <FaGithub className="social-icon" />
              <h3>GitHub</h3>
              <p>Check out my projects</p>
            </a>
            
            <a href="https://stackoverflow.com/users/3637043/sitakant" target="_blank" rel="noopener noreferrer" className="social-card stackoverflow">
              <FaStackOverflow className="social-icon" />
              <h3>Stack Overflow</h3>
              <p>1.9k reputation, 399k reached</p>
            </a>
            
            <a href="https://www.linkedin.com/in/cooligc" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
              <FaLinkedin className="social-icon" />
              <h3>LinkedIn</h3>
              <p>Let's connect professionally</p>
            </a>
            
            <a href="https://x.com/cooligc" target="_blank" rel="noopener noreferrer" className="social-card twitter">
              <FaXTwitter className="social-icon" />
              <h3>X</h3>
              <p>Follow my journey</p>
            </a>
            
            <a href="mailto:Chaudhury.Sitakant@gmail.com" className="social-card email">
              <FaEnvelope className="social-icon" />
              <h3>Email</h3>
              <p>Drop me a line</p>
            </a>
            
            <a href="https://www.instagram.com/mrnebulaguard/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
              <FaInstagram className="social-icon" />
              <h3>Instagram</h3>
              <p>See my life in photos</p>
            </a>
            
            <a href="https://facebook.com/cooligc/" target="_blank" rel="noopener noreferrer" className="social-card facebook">
              <FaFacebook className="social-icon" />
              <h3>Facebook</h3>
              <p>Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sitakanta Chaudhury. Crafted with passion and React.</p>
          <div className="footer-social">
            <a href="https://github.com/cooligc" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/cooligc" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/cooligc" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


