import React from 'react';
import baground from '../img/hero-background.png';

const Hero = ({
  title,
  secondaryLinkText,
  secondaryLinkPath,
  primaryLinkText,
  primaryLinkPath,
}) => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-background">
          <div className="img-container">
            <img src={baground} alt="background img" />
            <div className="img-effect"></div>
          </div>
        </div>
        <div className="card">
          <h1 className="card-title">{title}</h1>

          <div className="button-container">
            {primaryLinkText ? (
              <a
                className="but but-primary"
                href={primaryLinkPath ? primaryLinkPath : '#'}
              >
                {primaryLinkText}
              </a>
            ) : (
              <></>
            )}
            {primaryLinkText ? (
              <a
                className="but but-noBorder"
                href={secondaryLinkPath ? secondaryLinkPath : '#'}
              >
                {secondaryLinkText}
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
