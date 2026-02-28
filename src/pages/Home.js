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
        <div className="text-section">
          <h1 className="main-name">Adith Gunaseelan</h1>
          <h2 className="sub-title">
            Software Engineer | Full Stack Developer
          </h2>
          <p className="bio">
            I'm a Computer Science graduate student at the University of Southern California.
            I enjoy building things that actually get used, especially backend systems and
            full stack applications where performance and reliability matter.
            <br /><br />
            Most of my experience comes from internships and hands on projects where I worked
            on real production code, collaborated with engineers, and learned how software
            behaves outside of a classroom. Outside of work, I like experimenting with game
            development and interactive systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
