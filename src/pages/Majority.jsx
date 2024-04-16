import React from "react";
import { MajorityCard } from "../components";
import MajorityData from "../data/majorityData.json";

const Majority = () => {
  return (
    <section className="relative w-full bg-light-three overflow-hidden py-28" id="news">
      <div className="absolute w-full h-[612px] bg-gray top-0 left-0"></div>
      <div className="relative z-10 max-w-[1472px] px-16 mx-auto">
        <div className="text-center mb-[150px]">
          <h3 className="title text-light-one before:text-light-one after:bg-light-one after:w-[200px]">MAJORITY</h3>
        </div>
      </div>
      <div className="w-full lg:my-8 my-3 grid grid-cols-3 place-items-center">
        {MajorityData.map((majorityData) => {
          return <MajorityCard src={majorityData.src} title={majorityData.title} desc={majorityData.desc} />;
        })}
      </div>
    </section>
  );
};

export default Majority;
