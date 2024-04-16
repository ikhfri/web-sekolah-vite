import React from "react";

const MajorityCard = ({ src, title, desc }) => {
  return (
    <div className="majority-wrap relative my-[20.8px] mx-[24px] cursor-pointer">
      <div className="majority-card max-w-[350px] w-[100%] overflow-hidden bg-light-two duration-300 relative rounded-xl max-h[400px] h-[100%]">
        <div className="majority-image w-full h-[250px] relative overflow-hidden">
          <img className="w-[150%] absolute transition h-[125%] object-cover duration-500 origin-center" src={src} alt="" />
        </div>
        <div className="majority-content py-[17.6px] px-[16px] text-dark">
          <h3 className="title-card font-semibold text-2xl text-dark">{title}</h3>
          <p class="text-card">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MajorityCard;
