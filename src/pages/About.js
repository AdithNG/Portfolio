import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {


  return (
    <div className="about-page">
      <h1 data-aos="fade-up">More About Me</h1>

      <section data-aos="fade-up" data-aos-delay="100">
        <p>
          I'm a Computer Science student pursuing my Master's at the University of Southern California, with a background from UMBC. 
          I love building software systems that are both functional and expressive, especially at the intersection of programming and interactive media.
        </p>
      </section>

      <section data-aos="fade-up" data-aos-delay="200">
        <h2>What I’m Interested In</h2>
        <ul>
          <li>🎮 Designing game mechanics that support emotional storytelling</li>
          <li>🛠️ Full-stack development using React, Node.js, and Firebase</li>
          <li>💡 Rapid prototyping during game jams and tight dev cycles</li>
          <li>📈 Exploring AI and procedural systems in gameplay design</li>
        </ul>
      </section>

      <section data-aos="fade-up" data-aos-delay="300">
        <h2>What I’m Working On</h2>
        <ul>
          <li>🎓 Starting my MS in CS at USC (Fall 2025)</li>
          <li>👾 Refining my capstone game <em>Waiting At The Door</em></li>
          <li>📂 Improving and publishing past game jam projects</li>
          <li>🌐 Growing my portfolio site with new content and polish</li>
        </ul>
      </section>

      <section data-aos="fade-up" data-aos-delay="400">
        <h2>Just for Fun</h2>
        <p>
          When I'm not coding or debugging animations, I’m probably gaming, sketching ideas in my design doc, or trying to get Unity to cooperate at 3AM.
        </p>
      </section>
    </div>
  );
}

export default About;
