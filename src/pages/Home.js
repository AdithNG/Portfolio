import profileImg from '../assets/Adith.jpg';

function Home() {
  return (
    <div className="home-container" data-aos="fade-up">
      <div className="home-content">
        <img
          src={profileImg}
          alt="Adith Gunaseelan"
          className="profile-img"
          data-aos="zoom-in"
        />

        <div className="text-section" data-aos="fade-left" data-aos-delay="100">
          <p className="eyebrow">Available for software engineering opportunities</p>
          <h1 className="main-name">Adith Gunaseelan</h1>
          <h2 className="sub-title">Software Engineer • Full Stack Developer • Builder</h2>

          <div className="quick-highlights">
            <span>FastAPI / Python</span>
            <span>React / TypeScript</span>
            <span>PostgreSQL / Docker</span>
            <span>AI-Driven Product Builds</span>
          </div>

          <p className="bio">
            I&apos;m a Computer Science graduate student at the University of Southern California.
            I enjoy building practical systems that teams actually use, especially backend
            services and full-stack products where reliability and user experience both matter.
            <br /><br />
            Most of my experience comes from internships and hands-on projects built in real
            production-style environments. Outside of work, I experiment with game development
            and interactive systems to sharpen product intuition.
          </p>

          <div className="hero-actions">
            <a href="/Portfolio/Adith_Gunaseelan_Resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a href="https://github.com/AdithNG" target="_blank" rel="noreferrer" className="secondary">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
