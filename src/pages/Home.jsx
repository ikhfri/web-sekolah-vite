import React from "react";
import { NewsCard } from "../components";
import NewsData from "../data/newsData.json";
import { MajorityCard } from "../components";
import MajorityData from "../data/majorityData.json";
import ExtracurricularCard from "../components/ExtracurricularCard";
import extracurricularData from "../data/extracurricularData.json";

const Home = () => {
  return (
    <div id='home'>
      <section
        id='landing-page'
        className='flex flex-row items-center justify-center h-screen'
      >
        <div className='flex-1 h-full bg-hero bg-no-repeat hidden md:flex'></div>
        <div className='flex-1 h-full w-[50%] flex flex-col justify-center sm:bg-home-color py-12'>
          <div className='p-16'>
            <h2 className='text-3xl font-bold mb-4'>Welcome To</h2>
            <h1 className='text-6xl font-bold mb-4'>Nevtik Academy</h1>
            <p className='text-xl text-home-text-p mb-8'>
              Network Evolution Technology Information and Knowladge
            </p>
            <button className='bg-main-color hover:bg-home-color border-2 border-main-color text-white hover:text-main-color text-2xl font-semibold py-2 px-6 rounded-full transition duration-300'>
              Our News
            </button>
          </div>
        </div>
      </section>
      <section
        id='jurusan'
        className='grid grid-col place-items-center w-full justify-center flex-wrap h-auto p-10'
      >
        <div className='text-center'>
          <h1 className='text-2xl lg:text-5xl sm:text-3xl md:text-4xl font-bold uppercase'>
            majority
          </h1>
          <p className='text-xl text-home-text-p'>
            About nevtiks activities and achievements :
          </p>
        </div>
        <div className='flex flex-col lg:flex-row lg:my-8 my-3'>
          {MajorityData.slice(0, 3).map((majorityData) => {
            return (
              <MajorityCard
                src={majorityData.src}
                title={majorityData.title}
                desc={majorityData.desc}
              />
            );
          })}
        </div>
        <button class='btn-hover-white text-main-color border-2 border-main-color hover:bg-main-color hover:text-light-one text-xl font-bold py-2 px-4 rounded-full flex items-center transition duration-300'>
          <span className='span-hover-white h-5 w-5 bg-playRed bg-no-repeat transition duration-300'></span>
          <span className='pl-1'>More</span>
        </button>
      </section>
      <section
        id='news'
        className='grid grid-col place-items-center w-full justify-center flex-wrap h-auto p-10 bg-home-color'
      >
        <div className='text-center'>
          <h1 className='text-2xl lg:text-5xl sm:text-3xl md:text-4xl font-bold uppercase'>
            news update
          </h1>
          <p className='text-xl text-home-text-p'>
            About nevtiks activities and achievements :
          </p>
        </div>
        <div className='flex flex-col lg:my-8 my-3 lg:flex-row'>
          {NewsData.slice(0, 3).map((newsData) => {
            return (
              <NewsCard
                key={newsData.key}
                filterKey={newsData.key}
                src={newsData.src}
                title={newsData.title}
                date={newsData.date}
                user={newsData.user}
                desc={newsData.desc}
              />
            );
          })}
        </div>
        <button class='btn-hover-red text-light-one bg-main-color border-2 border-main-color hover:bg-home-color hover:text-main-color text-xl font-bold py-2 px-4 rounded-full flex items-center transition duration-300'>
          <span className='span-hover-red h-5 w-5 bg-playWhite bg-no-repeat transition duration-300'></span>
          <span className='pl-1'>More</span>
        </button>
      </section>
      <section
        id='ekskul'
        className='grid grid-col place-items-center w-full justify-center flex-wrap h-auto'
      >
        <div className='text-center'>
          <h1 className='lg:text-5xl sm:text-3xl md:text-4xl font-bold uppercase text-2xl'>
            extracurricular
          </h1>
          <p className='sm:text-xl text-lg text-home-text-p'>
            Nevtik academy has several extracurricular, including :
          </p>
        </div>
        <div className='flex flex-col lg:my-8 my-3 lg:flex-row'>
          {extracurricularData.slice(0, 3).map((extracurricularData) => {
            return (
              <ExtracurricularCard
                src={extracurricularData.src}
                title={extracurricularData.title}
                desc={extracurricularData.desc}
              />
            );
          })}
        </div>
        <a
          href='/extracurricular'
          class='btn-hover-white text-main-color border-2 border-main-color hover:bg-main-color hover:text-light-one text-xl font-bold py-2 px-4 rounded-full flex items-center transition duration-300'
        >
          <span className='span-hover-white h-5 w-5 bg-playRed bg-no-repeat transition duration-300'></span>
          <span className='pl-1'>More</span>
        </a>
      </section>
      <section className='flex flex-wrap place-content-center h-[550px] gap-14 sm:flex-row sm:h-[110%] sm:my-[32px]'>
        <img
          src='/images/home/mikrotik.svg'
          alt=''
          className='w-[125px] lg:w-[365px] md:w-[200px] sm:w-[157px] z-10'
        />
        <img
          src='/images/home/bnsp.svg'
          alt=''
          className='w-[125px] lg:w-[325px] md:w-[200px] sm:w-[175px]'
        />
        <img
          src='/images/home/cisco.svg'
          alt=''
          className='w-[125px] lg:w-[327px] md:w-[200px] sm:w-[175px]'
        />
        <img
          src='/images/home/smk-bisa.svg'
          alt=''
          className='w-[125px] lg:w-[306px] md:w-[200px] sm:w-[175px]'
        />
        <img
          src='/images/home/adobe.svg'
          alt=''
          className='w-[125px] lg:w-[348px] md:w-[200px] sm:w-[175px]'
        />
        <img
          src='/images/home/nevtik.svg'
          alt=''
          className='w-[125px] lg:w-[315px] md:w-[200px] sm:w-[175px]'
        />
      </section>
    </div>
  );
};

export default Home;
