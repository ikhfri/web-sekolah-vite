import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center h-20 bg-navBackground fixed z-50 w-full'>
      <div className='mr-12 w-20'>
        <img src='images/nevtik.svg' alt='' className='' />
      </div>
      <div className='flex items-center'>
        <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Home
        </a>
        <a href='/about' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
            About
        </a>
        <a href='/news' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          News
        </a>
        <div className='kesiswaan flex items-center'>
          <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
              Student Affairs <FontAwesomeIcon icon={faCaretDown} />
          </a>
          <div className='hidden bg-light-transparent rounded-xl min-w-["200px"] mt-["0.1rem"] text-center kesiswaan-child'>
            <a href='/Extracurricular' className='text-light-three mx-4 hover:underline p-5 block'>Extracurricular</a>
            <a href='/Ppdb' className='text-light-three mx-4 hover:underline p-5 block'>PPDB</a>
          </div>
        </div>
        <div className='curriculum flex items-center'>
          <a href='/' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
              Curriculum <FontAwesomeIcon icon={faCaretDown} />
          </a>
          <div className='curriculum-child'>
            <a href='/Majority' className='text-light-three mx-4 hover:underline p-5 block'>Majority</a>
            <a href='/Teachers' className='text-light-three mx-4 hover:underline p-5 block'>Teachers & Staffs</a>
          </div>
        </div>
        <a href='/facility' className='text-light-three mx-4 font-medium hover:text-main-color hover:underline'>
          Facilities & Infrastructure
        </a>
      </div>
      <div className='ml-12 flex relative top-1'>
        <a href='/'>
          <img src='images/socialMedia/youtube.svg' alt='' className='mx-2' />
        </a>
        <a href='/'>
          <img src='images/socialMedia/instagram.svg' alt='' className='mx-2' />
        </a>
        <a href='/'>
          <img src='images/socialMedia/github.svg' alt='' className='mx-2' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
