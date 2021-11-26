import React from 'react';

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
            <img
              src="https://www.vinted.lt/assets/seller-promotion/other/banner_tablets_up-afe3d19776592a72f165c1bb93fd02c5528250a8c670ecc1656654323f9d4856.jpg"
              alt="background img"
            />
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
