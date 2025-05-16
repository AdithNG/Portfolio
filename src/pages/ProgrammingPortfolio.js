import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing local images
import neuroleapImg from '../assets/neuroleap.jpg';
import umbcImg from '../assets/umbc.jpg';
import hydrosenseImg from '../assets/hydrosense.jpg';
import traveltrekImg from '../assets/traveltrek.jpg';

function ProgrammingPortfolio() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const [expandedImg, setExpandedImg] = useState(null);

  const handleImageClick = (src) => {
    setExpandedImg(src);
  };

  const closeModal = () => {
    setExpandedImg(null);
  };

  return (
    <div className="portfolio-page">
      <h1 data-aos="fade-up">Programming Projects & Experience</h1>

      {/* NeuroLeap Internship */}
      <div className="entry entry-left" data-aos="fade-right">
        <img
          src={neuroleapImg}
          alt="NeuroLeap Dashboard"
          className="entry-image"
          onClick={() => handleImageClick(neuroleapImg)}
        />
        <div className="text">
          <h2>Software Engineer Intern – NeuroLeap Corp</h2>
          <p>
            Developed full-stack web features using <strong>React</strong> and <strong>Node.js</strong> improving performance by 20%.
            Optimized PostgreSQL queries, built REST APIs, and redesigned UI components for responsiveness and UX improvements.
          </p>
        </div>
      </div>

      {/* Teaching Assistant */}
      <div className="entry entry-right" data-aos="fade-left">
        <div className="text">
          <h2>Teaching Assistant – UMBC</h2>
          <p>
            Mentored over 600 CS students across core subjects including <strong>Python</strong>, <strong>C++</strong>, and <strong>Data Structures</strong>.
            Led review sessions, debugged code, and promoted concept mastery through hands-on learning.
          </p>
        </div>
        <img
          src={umbcImg}
          alt="UMBC Teaching"
          className="entry-image"
          onClick={() => handleImageClick(umbcImg)}
        />
      </div>

      {/* HydroSense Project */}
      <div className="entry entry-left" data-aos="fade-right">
        <img
          src={hydrosenseImg}
          alt="HydroSense Project"
          className="entry-image"
          onClick={() => handleImageClick(hydrosenseImg)}
        />
        <div className="text">
          <h2>HydroSense – AI-Powered Hydroponics Monitor</h2>
          <p>
            Built a real-time plant health dashboard using <strong>React</strong> and <strong>Firebase</strong>. Integrated ML predictions, Twilio/SendGrid alerts, and environmental data visualization. 
            Helped reduce water usage by 15% through proactive insights.
          </p>
        </div>
      </div>

      {/* TravelTrek Project */}
      <div className="entry entry-right" data-aos="fade-left">
        <div className="text">
          <h2>TravelTrek – AI Travel Recommender</h2>
          <p>
            Led development of a GPT-4 powered chatbot that offers dynamic tourist suggestions. Built with <strong>Firebase</strong> auth and secure key management.
            Improved trip planning efficiency by 20%.
          </p>
        </div>
        <img
          src={traveltrekImg}
          alt="TravelTrek Chatbot"
          className="entry-image"
          onClick={() => handleImageClick(traveltrekImg)}
        />
      </div>

      {/* Resume Embed */}
      <div className="resume-block" data-aos="fade-up">
        <h2>Resume for Software Engineering Roles</h2>
        <iframe
          src={`${process.env.PUBLIC_URL}/Adith_Gunaseelan_Resume.pdf`}
          title="Programming Resume"
          width="100%"
          height="900px"
          style={{ border: '2px solid #444', borderRadius: '8px', marginTop: '1rem' }}
        />
      </div>

      {/* Shared Modal for image expansion */}
      {expandedImg && (
        <div className="modal" onClick={closeModal}>
          <img src={expandedImg} alt="Expanded View" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default ProgrammingPortfolio;
