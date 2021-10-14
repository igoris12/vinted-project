import React from 'react';

const Hero = ({ title, secondaryLinkText, primaryLinkText }) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-background"></div>
        <div className="card">
          <h1>{title}</h1>
          <i>{primaryLinkText}</i>
          <i>{secondaryLinkText}</i>
        </div>
      </div>
    </>
  );
};

export default Hero;
