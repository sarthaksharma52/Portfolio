import React from 'react';
import './Card1.css';

const Card = ({ title, year, imageSrc, liveLink, sourceCodeLink, cardColor, textColor }) => {
    return (
      <div className="card" style={{ borderColor: cardColor, backgroundColor: cardColor, color: textColor }}>
        <div className="card-header" style={{ backgroundColor: cardColor }}>
          <div className="card-year" style={{ color: textColor }}>{year}</div>
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="card-arrow" style={{ color: textColor }}>
            ➔
          </a>
        </div>
        <div className="card-title" style={{ color: textColor }}>{title}</div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="card-image-link">
          <img src={imageSrc} alt={title} className="card-image" />
        </a>
        
      </div>
      
    );
  };

export default Card;
