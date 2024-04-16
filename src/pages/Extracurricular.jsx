import React from "react";
import ExtracurricularCard from "../components/ExtracurricularCard";
import extracurricularData from "../data/extracurricularData.json";

const Extracurricular = () => {
  return (
    <section className="relative w-full bg-light-three overflow-hidden py-28" id="extracurricular">
      <div className="absolute w-full h-[612px] bg-main-color top-0 left-0"></div>
      <div className="relative z-10 max-w-[92rem] px-16 mx-auto">
        <div className="text-center mb-8">
          <h3 className="title text-light-one before:text-light-one after:bg-light-one after:w-[340px]">Extracurricular</h3>
        </div>
      </div>
      <div className="flex w-full justify-center flex-wrap mt-[200px]">
        <div className="w-[1200px] lg:my-8 my-3 grid grid-cols-3 ">
          {extracurricularData.map((extracurricularData) => {
            return <ExtracurricularCard src={extracurricularData.src} title={extracurricularData.title} desc={extracurricularData.desc} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
