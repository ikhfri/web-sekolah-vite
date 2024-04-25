import React from "react";

const Footer = () => {
  return (
    <div className="footer pt-[60px] bg-black w-full md:h-[300px] h-[650px] flex md:flex-row flex-col justify-around">
      <div className="logo ">
        <div className="Nev-logo">
          <img className="md:w-[150px] relative md:top-[-30px] top-[-10px] md:left-0 left-[25px]" src="images/nevtik.svg" alt="Logo-Nevtik" />
        </div>
        <div className="social-media text-center flex relative top-[-70px] md:top-[-40px]">
          <a href="">
            <img className="md:w-[40px] w-[35px] rounded m-[5px] md:ml-0 ml-[310px]" src="images/socialMedia/youtube.svg" alt="" />
          </a>
          <a href="">
            <img className="md:w-[40px] w-[31px] rounded m-[5px]" src="images/socialMedia/instagram.svg" alt="" />
          </a>
          <a href="">
            <img className="md:w-[40px] w-[31px] rounded m-[5px]" src="images/socialMedia/github.svg" alt="" />
          </a>
        </div>
        <div className="h-[0.5px] bg-home-color top-[-40px] relative md:hidden">

        </div>
      </div>
      
      {/* GARIS PEMISAH START */}

      

      {/* GARIS PEMISAH END */}

      <div className="about nav-footer mt-2 md:mt-0 md:ml-0 ml-4 relative md:top-0 top-[-10px]">
        <div className=" text-light-three font-semibold text-lg">ABOUT</div>
        <ul>
          <li>
            <a className="text-light-three text-xs" href="">
              Identity
            </a>
          </li>
          <li>
            <a className="text-light-three text-xs" href="">
              History
            </a>
          </li>
          <li>
            <a className="text-light-three text-xs" href="">
              Vision & Mission
            </a>
          </li>
        </ul>
      </div>
      <div className="student-affairs nav-footer mt-2 md:mt-0 md:ml-0 ml-[270px] relative md:top-0 top-[-118px]">
        <div className=" text-light-three font-semibold text-lg">STUDENT AFFAIRS</div>
        <ul>
          <li>
            <a className="text-light-three text-xs" href="">
              Extracullicular
            </a>
          </li>
          <li>
            <a className="text-light-three text-xs" href="">
              PPDB Information
            </a>
          </li>
        </ul>
      </div>
      <div className="curriculum nav-footer mt-2 md:mt-0 md:ml-0 ml-[270px] relative md:top-0 top-[-40px]">
        <div className=" text-light-three font-semibold text-lg">CURRICULUM</div>
        <ul>
          <li>
            <a className="text-light-three text-xs" href="">
              Majority
            </a>
          </li>
          <li>
            <a className="text-light-three text-xs" href="">
              Teachers & Staff
            </a>
          </li>
        </ul>
      </div>
      <div className="maps nav-footer mt-2 md:mt-0 md:ml-0 ml-4 relative md:top-0 top-[-125px]">
        <div className=" text-light-three font-semibold text-lg">FIND US :</div>
        <div className="maps md:mt-0 mt-4">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="230" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=smkn%201%20cibinong&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

