import { useState, useEffect } from "react";
import "./App.css";

import {
  Mail,
  Download,
  ShieldCheck,
  Code2,
  Database,
  Globe2,
  Blocks,
  ExternalLink,
  GraduationCap,
  Trophy,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Bot,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
function App() {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const [galleryProject, setGalleryProject] = useState("blockchain-voting");
  const [galleryTotal, setGalleryTotal] = useState(9);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === galleryTotal ? 1 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 1 ? galleryTotal : prev - 1
    );
  };

  useEffect(() => {
    if (!galleryOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setGalleryOpen(false);
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") previousImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpen, galleryTotal]);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>PS</span>
          Pawan Solunke
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
    <section className="hero">

  <div className="hero-left">

    <div className="status">
      <span></span>
      Open to Internships
    </div>

    <p className="hello">HELLO, I'M</p>

    <h1 className="name-gradient">
      PAWAN
      <br />
      WALMIK
      <br />
      SOLUNKE
    </h1>

    <h2>
      B.Tech CSE Student & Cybersecurity Enthusiast
    </h2>

    <p className="hero-description">
      Passionate about Cybersecurity, Blockchain, IoT and modern
      technologies. I enjoy building secure, useful and innovative
      software solutions.
    </p>

    <div className="hero-tags">
      <span>Cybersecurity</span>
      <span>Blockchain</span>
      <span>IoT</span>
      <span>Web Development</span>
    </div>

    <div className="hero-buttons">

      <a href="#projects" className="primary-btn">
        Explore My Work
        <ExternalLink size={18} />
      </a>

      <a
        href="/resume.pdf"
        download
        className="secondary-btn"
      >
        <Download size={18} />
        Resume
      </a>

    </div>

    {/* SOCIAL ICONS */}
    <div className="social-links">

      <a
        href="https://github.com/pawansolunke31-pixel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/pawan-solunke-582254313/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

    </div>

    {/* EMAIL */}
    <div className="email-row">
      <Mail size={18} />

      <a href="mailto:pawansolunke31@gmail.com">
        pawansolunke31@gmail.com
      </a>
    </div>

  </div>


  {/* PROFILE */}
  <div className="hero-right">

    <div className="profile-glow"></div>

    <div className="profile-card">

      <div className="profile-image">
        <img
          src="/profile.jpg"
          alt="Pawan Solunke"
        />
      </div>

      <div className="profile-info">
        <MapPin size={18} />
        India
      </div>

    </div>

    <div className="floating-card floating-one">
      <ShieldCheck />
      Cybersecurity
    </div>

    <div className="floating-card floating-two">
      <Blocks />
      Blockchain
    </div>

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Turning ideas into
          <span> digital solutions.</span>
        </h2>

        <div className="about-card">

          <p>
            I am a B.Tech Computer Science Engineering student specializing in
            Cyber Security, IoT and Blockchain Technology. My interests include Cybersecurity,
            Ethical Hacking, Blockchain Development, Web Development and
            Network Security.
          </p>

          <p>
            My goal is to develop strong cybersecurity skills and build secure
            technology solutions that solve real-world problems.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I <span>work with.</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <ShieldCheck />
            <h3>Cybersecurity</h3>
            <p>Network Security, Ethical Hacking, Linux</p>
          </div>

          <div className="skill-card">
            <Code2 />
            <h3>Programming</h3>
            <p>Python, Java, C, C++</p>
          </div>

          <div className="skill-card">
            <Globe2 />
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <Blocks />
            <h3>Blockchain</h3>
            <p>Solidity, Truffle, Ganache, Web3</p>
          </div>

          <div className="skill-card">
            <Database />
            <h3>Database</h3>
            <p>MySQL, DBMS, SQL</p>
          </div>

          <div className="skill-card">
            <FaGithub />
            <h3>Developer Tools</h3>
            <p>Git, FaGithub, VS Code</p>
          </div>

        </div>

      </section>

    {/* PROJECTS */}
<section id="projects" className="section">

  <p className="section-label">FEATURED PROJECTS</p>

  <h2 className="section-title">
    Things I've <span>built.</span>
  </h2>

  <div className="projects-grid">

    <div className="project-card">

      <div className="project-icon">
        <Blocks size={28} />
      </div>

      <h3>Blockchain Voting System</h3>

      <div className="project-dev-badge">DEV :- Pawan Solunke</div>

      <p>
        A decentralized blockchain-based voting application designed to
        provide secure and transparent digital elections.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Solidity</span>
        <span>Ganache</span>
        <span>Web3</span>
      </div>

      <div className="project-actions">
        <a
          href="https://blockchain-voting-system-blue.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn live-btn"
          title="Open Live Demo on Vercel"
        >
          <SiVercel size={14} />
          Live Demo
          <ExternalLink size={14} />
        </a>

        <a
          href="https://github.com/pawansolunke31-pixel/Blockchain-Voting-System"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn github-btn"
          title="View Source Code on GitHub"
        >
          <FaGithub size={16} />
          Code
        </a>

        <button
          className="project-btn gallery-btn"
          onClick={() => {
            setGalleryProject("blockchain-voting");
            setGalleryTotal(9);
            setCurrentImage(1);
            setGalleryOpen(true);
          }}
        >
          Gallery
        </button>
      </div>

    </div>


    <div className="project-card">

      <div className="project-icon">
        <Bot size={28} />
      </div>

      <h3>AI Chat Box</h3>

      <div className="project-dev-badge">DEV :- Pawan Solunke</div>

      <p>
        An intelligent conversational AI application providing responsive,
        context-aware chat interactions, smart tools, and modern glassmorphic interface.
      </p>

      <div className="project-tech">
        <span>JavaScript</span>
        <span>AI / LLM</span>
        <span>CSS3 Glassmorphism</span>
        <span>Web Search API</span>
      </div>

      <div className="project-actions">
        <a
          href="https://pawan-ai-chat-box.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn live-btn"
          title="Open Live Demo on Vercel"
        >
          <SiVercel size={14} />
          Live Demo
          <ExternalLink size={14} />
        </a>

        <a
          href="https://github.com/pawansolunke31-pixel/Ai-Chat-Box"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn github-btn"
          title="View Source Code on GitHub"
        >
          <FaGithub size={16} />
          Code
        </a>

        <button
          className="project-btn gallery-btn"
          onClick={() => {
            setGalleryProject("ai-chat-box");
            setGalleryTotal(5);
            setCurrentImage(1);
            setGalleryOpen(true);
          }}
        >
          Gallery
        </button>
      </div>

    </div>


    <div className="project-card">

      <div className="project-icon">
        <GraduationCap size={28} />
      </div>

      <h3>Campus Readiness Platform</h3>

      <div className="project-dev-badge">DEV :- Pawan Solunke</div>

      <p>
        A platform created to help students prepare for placements,
        improve skills and become career ready.
      </p>

      <div className="project-tech">
        <span>Web</span>
        <span>Education</span>
        <span>Career</span>
      </div>

      <div className="project-actions">
        <a
          href="https://github.com/pawansolunke31-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn github-btn"
          title="View Project on GitHub"
        >
          <FaGithub size={16} />
          Code
        </a>

        <button
          className="project-btn gallery-btn"
          onClick={() => {
            setGalleryProject("campus-readiness");
            setGalleryTotal(5);
            setCurrentImage(1);
            setGalleryOpen(true);
          }}
        >
          Gallery
        </button>
      </div>

    </div>

  </div>

</section>

{/* EDUCATION */}
<section id="education" className="section">

  <p className="section-label">EDUCATION</p>

  <h2 className="section-title">
    My academic <span>journey.</span>
  </h2>

  <div className="education-card">

    <div className="education-top">
      <div className="education-icon-box">
        <GraduationCap size={32} />
      </div>

      <div className="education-header-text">
        <div className="education-title-row">
          <h3>B.Tech Computer Science Engineering</h3>
          <div className="education-cgpa-badge">
            <span className="cgpa-label">CGPA</span>
            <span className="cgpa-number">8.26</span>
          </div>
        </div>

        <p className="education-school">School of Engineering and Technology</p>
      </div>
    </div>

    <div className="education-divider"></div>

    <div className="education-content">
      <div className="education-spec-tag">
        <Sparkles size={16} />
        <span>Specialization: <strong>Cyber Security, IoT & Blockchain Technology</strong></span>
      </div>

      <p className="education-summary">
        Focusing on cybersecurity defense, decentralized technologies, network security, IoT architecture, and modern full-stack software development.
      </p>

      <div className="education-chips">
        <span>IoT & Embedded</span>
        <span>Blockchain</span>
        <span>Cybersecurity</span>
        <span>Network Security</span>
        <span>Data Structures</span>
      </div>
    </div>

  </div>

</section>
      {/* ACHIEVEMENTS */}
      <section className="section">

        <p className="section-label">ACHIEVEMENTS</p>

        <div className="achievement-card">

          <Trophy size={40} />

          <div>
            <h3>2nd Runner-Up — Protonova</h3>

            <p>
              Campus Readiness Platform presented at Protonova under the
              Supernova technical event.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      {/* CERTIFICATES */}
<section id="certificates" className="section">

  <p className="section-label">CERTIFICATIONS</p>

  <h2 className="section-title">
    Learning & <span>certifications.</span>
  </h2>

  <div className="certificate-grid">

    <div className="certificate-card">
      <ShieldCheck size={38} />

      <h3>Cybersecurity</h3>

      <p>
        Cybersecurity and security-related certifications will be showcased here.
      </p>
    </div>

    <div className="certificate-card">
      <Blocks size={38} />

      <h3>Blockchain</h3>

      <p>
        Blockchain, Web3 and Solidity certifications will be showcased here.
      </p>
    </div>

    <div className="certificate-card">
      <Code2 size={38} />

      <h3>Programming</h3>

      <p>
        Programming and software development certifications will be showcased here.
      </p>
    </div>

  </div>

      </section>

<footer>
  <p>Designed & Built by Pawan Walmik Solunke</p>
</footer>

{galleryOpen && (
  <div
    className="gallery-overlay"
    onClick={(e) => {
      if (e.target === e.currentTarget) setGalleryOpen(false);
    }}
  >

    <button
      className="gallery-close"
      onClick={() => setGalleryOpen(false)}
      aria-label="Close Gallery"
      title="Close (Esc)"
    >
      <X />
    </button>

    <button
      className="gallery-arrow gallery-left"
      onClick={previousImage}
      aria-label="Previous Image"
      title="Previous (Left Arrow)"
    >
      <ChevronLeft />
    </button>

    <div className="gallery-content">
      <h3 className="gallery-project-title">
        {galleryProject === "blockchain-voting"
          ? "Blockchain Voting System"
          : galleryProject === "ai-chat-box"
          ? "AI Chat Box"
          : "Campus Readiness Platform"}
      </h3>

      <img
        src={`/projects/${galleryProject}/${currentImage}.jpg`}
        alt={`${galleryProject} Screenshot ${currentImage}`}
      />

      <p>
        Screenshot {currentImage} of {galleryTotal}
      </p>
    </div>

    <button
      className="gallery-arrow gallery-right"
      onClick={nextImage}
      aria-label="Next Image"
      title="Next (Right Arrow)"
    >
      <ChevronRight />
    </button>

  </div>
)}
</div>
);
}

export default App;