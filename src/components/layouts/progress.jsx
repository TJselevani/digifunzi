// src/Progress.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';

const Progress = ({ currentPage, totalPages }) => {
  const progressPercentage = (currentPage / totalPages) * 100;

  return (
    <div className="progress-container">
      {/* <div className="progress-icons">
        {Array.from({ length: totalPages }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faBook}
            className={index < currentPage ? 'completed' : 'pending'}
          />
        ))}
      </div> */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
