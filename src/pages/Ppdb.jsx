import React from "react";

const Ppdb = () => {
  return (
    <section className="relative w-full bg-light-three overflow-hidden pt-28" id="news">
      <div className="absolute w-full h-[612px] bg-main-color top-0 left-0"></div>
      <div className="relative z-10 max-w-[92rem] px-16 mx-auto">
        <div className="relative z-10 grid-cols-2 grid items-center justify-center">
          <div className="mr-6 relative flex items-center justify-center">
            <img src="images/ppdb/amico.svg" alt="" className="relative max-w-3xl z-10" />
          </div>
          <div className="ml-10">
            <h1 className="uppercase font-bold text-6xl text-light-one mb-4">ppdb</h1>
            <p className="uppercase text-4xl max-w-sm text-light-one mb-4">nevtik academy 2022</p>
            <a href="/home" className="btn font-bold leading-[3.85rem] text-3xl text-center inline-block text-light-one uppercase border-2 box-border absolute w-80 h-16 rounded-[50px]">
              register now
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center flex-wrap">
        <img src="images/ppdb/sertif.svg" alt="" className="my-28" />
      </div>
    </section>
  );
};

export default Ppdb;
