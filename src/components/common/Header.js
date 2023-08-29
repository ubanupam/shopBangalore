import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchCartUser from './SearchCartUser';
import HamburgerIcon from './HamburgerIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-3 -mt-4">
      <div className="md:w-[1298px] sm:w-[339px] mx-auto flex items-center justify-between">
        <Logo />
        <div className='flex gap-7'>
        <Menu isMenuOpen={isMenuOpen} />
        <SearchCartUser isMenuOpen={isMenuOpen} />
        <HamburgerIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        
      </div>
    </header>
  );
};

export default Header;


