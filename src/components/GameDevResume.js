import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function GameDevResume() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="resume-section" data-aos="fade-up">
      <h2>My Game Development Resume</h2>
      <iframe
        src={`${process.env.PUBLIC_URL}/Adith_Gunaseelan_Game_Dev_Resume.pdf`}
        title="Game Development Resume"
        width="100%"
        height="900px"
        style={{
          border: '2px solid #444',
          borderRadius: '8px',
          marginTop: '1rem',
        }}
      />
    </div>
  );
}

export default GameDevResume;
