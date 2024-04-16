import React from "react";

const Footer = () => {
  return (
    <div className='footer pt-[60px] bg-black w-full h-[300px] flex justify-around'>
      <div className='logo'>
        <div className='Nev-logo'>
          <img
            className='w-[150px] relative top-[-30px]'
            src='images/nevtik.svg'
            alt='Logo-Nevtik'
          />
        </div>
        <div className='social-media text-center flex relative top-[-30px]'>
          <a href='/'>
            <img
              className='w-[40px] rounded m-[5px]'
              src='images/socialMedia/youtube.svg'
              alt=''
            />
          </a>
          <a href='/'>
            <img
              className='w-[40px] rounded m-[5px]'
              src='images/socialMedia/instagram.svg'
              alt=''
            />
          </a>
          <a href='/'>
            <img
              className='w-[40px] rounded m-[5px]'
              src='images/socialMedia/github.svg'
              alt=''
            />
          </a>
        </div>
      </div>

      <div className='about nav-footer'>
        <div className=' text-light-three font-semibold text-lg'>ABOUT</div>
        <ul>
          <li>
            <a className='text-light-three text-xs' href='/'>
              Identity
            </a>
          </li>
          <li>
            <a className='text-light-three text-xs' href='/'>
              History
            </a>
          </li>
          <li>
            <a className='text-light-three text-xs' href='/'>
              Vision & Mission
            </a>
          </li>
        </ul>
      </div>
      <div className='student-affairs nav-footer '>
        <div className=' text-light-three font-semibold text-lg'>
          STUDENT AFFAIRS
        </div>
        <ul>
          <li>
            <a className='text-light-three text-xs' href='/'>
              Extracullicular
            </a>
          </li>
          <li>
            <a className='text-light-three text-xs' href='/'>
              PPDB Information
            </a>
          </li>
        </ul>
      </div>
      <div className='curriculum nav-footer'>
        <div className=' text-light-three font-semibold text-lg'>
          CURRICULUM
        </div>
        <ul>
          <li>
            <a className='text-light-three text-xs' href='/'>
              Majority
            </a>
          </li>
          <li>
            <a className='text-light-three text-xs' href='/'>
              Teachers & Staff
            </a>
          </li>
        </ul>
      </div>
      <div className='maps nav-footer'>
        <div className=' text-light-three font-semibold text-lg'>FIND US :</div>
        <div className='maps'>
          <div class='mapouter'>
            <div class='gmap_canvas'>
              <iframe
                width='300'
                height='200'
                id='gmap_canvas'
                src='https://maps.google.com/maps?q=smkn%201%20cibinong&t=&z=17&ie=UTF8&iwloc=&output=embed'
                frameborder='0'
                scrolling='no'
                marginheight='0'
                marginwidth='0'
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
