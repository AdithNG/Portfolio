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
            I'm a Computer Science student at UMBC graduating in Spring 2025, with internship experience in full-stack development and machine learning applications.
            This fall, I’ll be joining the <strong>University of Southern California</strong> for my M.S. in Computer Science, focusing on systems, AI, and immersive technologies.
            <br /><br />
            My interests include backend development, scalable web systems, and scripting interactive experiences using Unity and C#. Game development remains a side passion I explore through personal projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
