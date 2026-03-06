import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing local images
import neuroleapImg from '../assets/neuroleap.jpg';
import umbcImg from '../assets/umbc.jpg';
import hydrosenseImg from '../assets/hydrosense.jpg';
import traveltrekImg from '../assets/traveltrek.jpg';
import harmonianetImg from '../assets/harmonianet.jpg';
import bcsImg from '../assets/bcs.jpg';
import lastmileImg from '../assets/lastmile.jpg';
import opspilotImg from '../assets/opspilot.svg';

function ProgrammingPortfolio() {
  useEffect(() => {
    AOS.init({ once: false, mirror: true });
  }, []);

  const [expandedImg, setExpandedImg] = useState(null);

  const handleImageClick = (src) => {
    setExpandedImg(src);
  };

  const closeModal = () => {
    setExpandedImg(null);
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/Adith_Gunaseelan_Resume.pdf?v=${new Date().getTime()}`;

  return (
    <div className="portfolio-page">
      <h1 data-aos="fade-up">Programming Projects & Experience</h1>

      {/* OpsPilot Project */}
      <div className="entry entry-left" data-aos="fade-right">
        <img
          src={opspilotImg}
          alt="OpsPilot AI Operations Copilot"
          className="entry-image"
          onClick={() => handleImageClick(opspilotImg)}
        />
        <div className="text">
          <h2>OpsPilot - AI Engineering Operations Copilot</h2>
          <p>
            Built a full-stack internal AI copilot that answers runbook questions, drafts incident summaries and tickets,
            ingests documents and GitHub artifacts, and routes sensitive actions through approval gates.
            The backend uses <strong>FastAPI</strong>, <strong>LangGraph</strong>, <strong>LangChain</strong>, <strong>GraphQL</strong>,
            <strong>PostgreSQL/pgvector</strong>, and <strong>Docker</strong>, with a <strong>Next.js + TypeScript</strong> SPA
            for operations workflows, traces, jobs, approvals, and observability.
          </p>
          <p>
            Repo:{' '}
            <a
              href="https://github.com/AdithNG/OpsPilot"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              github.com/AdithNG/OpsPilot
            </a>
          </p>
        </div>
      </div>

      {/* Bitcoin Credit Services Internship */}
      <div className="entry entry-right" data-aos="fade-left">
        <div className="text">
          <h2>Software Engineer Intern – Bitcoin Credit Services</h2>
          <p>
            Working on a production microservices platform using <strong>NestJS</strong>, <strong>PostgreSQL</strong>, and <strong>Docker</strong>.
            Built event driven services with <strong>Kafka</strong>, implemented role based access with <strong>Keycloak</strong>,
            and contributed to multi tenant card issuing and compliance workflows.
          </p>
        </div>
        <img
          src={bcsImg}
          alt="Bitcoin Credit Services Platform"
          className="entry-image"
          onClick={() => handleImageClick(bcsImg)}
        />
      </div>


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

      {/* LastMile Project */}
      <div className="entry entry-right" data-aos="fade-left">
        <div className="text">
          <h2>LastMile – Real-Time Delivery Route Optimizer</h2>
          <p>
            Built a full-stack engine solving the <strong>Capacitated Vehicle Routing Problem with Time Windows (CVRPTW)</strong>.
            Implemented a greedy + 2-opt solver, async optimization via <strong>Celery + Redis</strong>,
            live traffic rerouting over <strong>WebSockets</strong>, and an interactive <strong>React/Leaflet</strong> map dashboard.
            Backend built with <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, containerized with Docker Compose.
          </p>
        </div>
        <img
          src={lastmileImg}
          alt="LastMile Route Optimizer"
          className="entry-image"
          onClick={() => handleImageClick(lastmileImg)}
        />
      </div>

      {/* Teaching Assistant */}
      <div className="entry entry-right" data-aos="fade-right">
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

      {/* HarmoniaNet Project */}
      <div className="entry entry-left" data-aos="fade-left">
        <img
          src={harmonianetImg}
          alt="HarmoniaNet Music Genre Classifier"
          className="entry-image"
          onClick={() => handleImageClick(harmonianetImg)}
        />
        <div className="text">
          <h2>HarmoniaNet – Music Genre Classification Web App</h2>
          <p>
            Built and deployed a full-stack web application where users upload 30 second audio clips for genre prediction.
            Implemented audio preprocessing, spectrogram generation, and a neural network model using <strong>Python</strong> and <strong>PyTorch</strong>,
            with a <strong>React</strong> frontend for interactive uploads and results.
          </p>
        </div>
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
          src={resumeUrl}
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
