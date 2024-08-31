import React from 'react';
import web from "../assets/web.svg";
import cv from "../assets/cv.jpg";
import odx from "../assets/odx.png";

export const Portfolio = () => {
  return (
    <div className='portfolio--container'>
      <h2 className='recent--work'>Recent Developments</h2>
        
      <div className="portfolio--row">
        <ProjectCard
          image={odx}
          title="Spartan Tips"
          technologies="Web App: Svelte.js"
          liveLink="https://odx.vercel.app"
        />
        
        <ProjectCard
          image={cv}
          title="Portfolio Website 2.0"
          technologies="Frontend: HTML + CSS"
          liveLink="https://joshuaofosu.vercel.app/"
        />
      </div>
      
    <a className='explore' href="https://behance.net/joeokat" target='_blank' rel='noreferrer'>Explore More</a>
    </div>
  );
}

const ProjectCard = ({ image, title, technologies, liveLink }) => {
  return (
    <div className="center">        
      <div className='portfolio--card'>
        <img src={image} alt={title} />
        <p className='title'>{title}</p>
        <p>{technologies}</p>
        <a className='view--BTN' href={liveLink} rel='noreferrer'>
          View Live Project
          <img src={web} alt="web icon" />
        </a>
      </div>
    </div>
  );
}
