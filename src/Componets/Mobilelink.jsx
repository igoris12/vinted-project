import React from 'react';

const Mobilelink = ({ text, link, img }) => {
  return (
    <>
      <div className="cell-body">
        {img ? (
          <div className="cell-img">
            <img src={img} alt="icon" />
          </div>
        ) : (
          <></>
        )}

        <a href={link ? link : '#'} className="cell-link">
          {text}
        </a>
      </div>
    </>
  );
};

export default Mobilelink;
