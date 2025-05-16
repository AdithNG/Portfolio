import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import doorImg from '../assets/waitingdoor.jpg'; 
import door1 from '../assets/waiting1.png';
import door2 from '../assets/waiting2.png';
import door3 from '../assets/waiting3.png';
import door4 from '../assets/waiting4.png';
import cardImg from '../assets/cardbattler.jpg';
import frostyImg from '../assets/frostyfps.jpg';
import GameDevResume from '../components/GameDevResume';

function GamePortfolio() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const doorImages = [doorImg, door1, door2, door3, door4];
  const [currentDoorIndex, setCurrentDoorIndex] = useState(0);
  const [expandedImg, setExpandedImg] = useState(null);

  const handlePrev = () => {
    setCurrentDoorIndex((prev) => (prev - 1 + doorImages.length) % doorImages.length);
  };

  const handleNext = () => {
    setCurrentDoorIndex((prev) => (prev + 1) % doorImages.length);
  };

  const handleImageClick = (src) => {
    setExpandedImg(src);
  };

  const closeModal = () => {
    setExpandedImg(null);
  };

  return (
    <div className="portfolio-page">
      <h1 data-aos="fade-up">Game Development Projects</h1>

      {/* Waiting At The Door */}
      <div className="entry entry-left" data-aos="fade-right">
        <div className="carousel-wrapper">
          <img
            src={doorImages[currentDoorIndex]}
            alt={`Waiting At The Door ${currentDoorIndex + 1}`}
            className="entry-image"
            onClick={() => handleImageClick(doorImages[currentDoorIndex])}
          />
          <div className="carousel-controls">
            <button onClick={handlePrev}>&larr;</button>
            <span>{currentDoorIndex + 1} / {doorImages.length}</span>
            <button onClick={handleNext}>&rarr;</button>
          </div>
        </div>
        <div className="text">
          <h2>Waiting At The Door</h2>
          <p>
            <strong>Capstone Game | Unity & C# | Team of 4 Programmers & 5 Artists</strong><br />
            A 2D platformer exploring the emotional stages of grief through the eyes of a loyal dog whose owner never returns.
            Each level represents a stage of grief and features custom enemies, puzzles, and visual storytelling.
          </p>
          <p><strong>My contributions included:</strong></p>
          <ul>
            <li>Gameplay mechanics and puzzle triggers</li>
            <li>Cinemachine camera behavior and transitions</li>
            <li>Animation scripting and cutscene sequences</li>
            <li>State persistence across scenes and checkpoints</li>
            <li>UI and all menus including Pause, Game Over, and Level Select</li>
          </ul>
          <p>
            <a href="https://adithftw.itch.io/waiting-at-the-door" target="_blank" rel="noreferrer" className="project-link">
              ▶ Play the Game
            </a>{' '}|{' '}
            <a href="https://github.com/olipat/Waiting-At-The-Door" target="_blank" rel="noreferrer" className="project-link">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>

      {/* Card Battler */}
      <div className="entry entry-right" data-aos="fade-left">
        <div className="text">
          <h2>Turn-Based Card Battler</h2>
          <p>
            <strong>Solo Project | Unity & C#</strong>
            <br />
            A strategic card game where players summon units, manage mana, and unleash automatic attacks.
          </p>
          <p>
            <a href="https://play.unity.com/en/games/5050e6ba-73d2-4a5f-81fd-8c00f9226d2e/card-battler" target="_blank" rel="noreferrer" className="project-link">
              ▶ Play on Unity Web
            </a>
          </p>
        </div>
        <img
          src={cardImg}
          alt="Card Battler Game"
          className="entry-image"
          onClick={() => handleImageClick(cardImg)}
        />
      </div>

      {/* FrostyFPS */}
      <div className="entry entry-left" data-aos="fade-right">
        <img
          src={frostyImg}
          alt="FrostyFPS Gameplay"
          className="entry-image"
          onClick={() => handleImageClick(frostyImg)}
        />
        <div className="text">
          <h2>FrostyFPS – 3D Game Jam Shooter</h2>
          <p>
            <strong>Game Jam | Unity & C#</strong>
            <br />
            A 3D FPS built in 48 hours with wave-based combat, RPG pickups, and surprise mechanics like healing allies.
          </p>
          <p>
            <a href="https://play.unity.com/en/games/c341eb92-5103-49a8-acf1-2452195150a1/frostyfps" target="_blank" rel="noreferrer" className="project-link">
              ▶ Play on Unity Web
            </a>
          </p>
        </div>
      </div>

      <GameDevResume />

      {/* Shared Modal */}
      {expandedImg && (
        <div className="modal" onClick={closeModal}>
          <img src={expandedImg} alt="Expanded" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default GamePortfolio;
