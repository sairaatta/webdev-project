import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu and close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu isOpen:', isOpen);
    setIsOpen(prevIsOpen => !prevIsOpen); // Toggle the menu state
  };

  return (
    <nav className='bg-black text-white shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='font-bold text-2xl'>
          MY LOGO
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          <ul className='flex space-x-8'>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>PRODUCTS</li>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>WHY XYZ</li>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>RESOURCES</li>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>COMPANY</li>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>PRICING</li>
          </ul>
          <ul className='flex space-x-6'>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>LOGIN</li>
            <li className='hover:text-yellow-400 transition-colors duration-300 text-sm text-white'>CONTACT US</li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-2xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu} className='text-2xl'>
            <FaTimes />
          </button>
        </div>
        <ul className='flex flex-col items-center space-y-6 mt-16'>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>PRODUCTS</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>WHY XYZ</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>RESOURCES</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>COMPANY</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>PRICING</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>LOGIN</li>
          <li className='text-lg text-white hover:text-yellow-400 transition-colors duration-300'>CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
