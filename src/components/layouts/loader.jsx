// Loader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon icon={faSpinner} spin />
  </div>
);

export default Loader;
