import profileImg from '../assets/Adith.jpg';

function Home() {
  return (
    <div className="home-container" data-aos="fade-up">
      <div className="home-content">
        <img src={profileImg} alt="Adith Gunaseelan" className="profile-img" data-aos="zoom-in"/>
        <div className="text-section">
          <h1 className="main-name">Adith Gunaseelan</h1>
          <h2 className="sub-title">Software Engineer | Full-Stack Developer | CS Graduate Student</h2>
          <p className="bio">
            I'm a Master's student in Computer Science at the <strong>University of Southern California</strong>, specializing in systems, AI, and immersive technologies.
            I previously earned my B.S. in Computer Science from UMBC, graduating <i>magna cum laude</i> in Spring 2025, with internship experience in full-stack development
            <br /><br />
            My interests include backend development, scalable web systems, and scripting interactive experiences using Unity and C#. Game development remains a side passion I explore through personal projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
