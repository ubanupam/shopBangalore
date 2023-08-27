// HamburgerIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HamburgerIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      className="md:hidden text-gray-600 focus:outline-none"
      onClick={toggleMenu}
    >
      <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
    </button>
  );
};

export default HamburgerIcon;
