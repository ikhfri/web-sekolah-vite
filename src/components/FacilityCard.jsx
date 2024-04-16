import React from "react";

const FacilityCard = ({ src, count, title }) => {
  return (
    <div className="facility-wrap field relative my-[1.3rem] mx-[1.5rem] cursor-pointer">
      <div className="facility-card max-w-[350px] w-[480px] overflow-hidden bg-light-two duration-300 relative rounded-xl max-h[400px]">
        <div className="facility-image w-full h-[250px] relative overflow-hidden">
          <img className="w-[150%] absolute transition h-[125%] object-cover duration-500 origin-center" src={src} alt="" />
        </div>
        <div className="facility-content py-[17.6px] px-[16px] text-main-color">
          <h1 className="count absolute text-[48px] bottom-[32px] font-semibold">{count}</h1>
          <h3 className="title-card font-semibold text-[25.6px]">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
