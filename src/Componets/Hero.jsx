import React from 'react';

const Hero = ({ title, secondaryLinkText, primaryLinkText }) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-background">
          <div className="card">
            <h1 className="card-title">{title}</h1>
            <div className="button-container">
              <a className="but but-primary">{primaryLinkText}</a>
              <a className="but but-noBorder momile">{secondaryLinkText}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
