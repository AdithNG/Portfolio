import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import doorImg from '../assets/waitingdoor.jpg'; // Make sure the image is placed here
import cardImg from '../assets/cardbattler.jpg';
import frostyImg from '../assets/frostyfps.jpg';
import GameDevResume from '../components/GameDevResume';

function GamePortfolio() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="portfolio-page">
      <h1 data-aos="fade-up">Game Development Projects</h1>

      {/* Waiting At The Door */}
      <div className="entry entry-left" data-aos="fade-right">
        <img
          src={doorImg}
          alt="Waiting At The Door Cover"
          className="entry-image"
        />
        <div className="text">
          <h2>Waiting At The Door</h2>
          <p>
            <strong>Capstone Game | Unity & C# | Team of 4 Programmers & 5 Artists</strong>
            <br />
            A 2D platformer exploring the emotional stages of grief through the eyes of a loyal dog whose owner never returns. 
            The game progresses through five levels, each designed around a stage of grief and represented with unique enemies, 
            puzzles, and environments. The player gains abilities representing healing and emotional resilience, 
            culminating in a heartfelt reunion symbolizing acceptance.
          </p>
          <p>
            <a href="https://adithftw.itch.io/waiting-at-the-door" target="_blank" rel="noreferrer" className="project-link">
              ▶ Play the Game
            </a>{' '}
            |{' '}
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
            A strategic turn-based card game where players summon units, manage mana, and engage in automatic combat. 
            Units are deployed on the board, each turn progressing the mana system and triggering attacks.
         
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
        />
      </div>
      {/* FrostyFPS – Game Jam Entry */}
      <div className="entry entry-left" data-aos="fade-right">
        <img src={frostyImg} alt="FrostyFPS Gameplay" />
        <div className="text">
          <h2>FrostyFPS – 3D Game Jam Shooter</h2>
          <p>
            <strong>Game Jam | Unity & C#</strong>
            <br />
            A 3D first-person shooter where players battle waves of enemies and bosses across multiple levels. 
            Players can discover hidden challenges that unlock powerful weapons like RPGs, projectile launchers, 
            and even summon a healing enemy to turn the tide. Designed with progression and surprise elements in mind, 
            this project tested rapid prototyping, level design, and gameplay balancing under tight constraints.
          </p>
          <p>
            <a href="https://play.unity.com/en/games/c341eb92-5103-49a8-acf1-2452195150a1/frostyfps" target="_blank" rel="noreferrer" className="project-link">
              ▶ Play on Unity Web
            </a>
          </p>
        </div>
      </div>
      <GameDevResume />
    </div>
  );
}

export default GamePortfolio;
