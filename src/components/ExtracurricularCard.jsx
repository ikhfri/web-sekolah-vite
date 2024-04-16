import React from "react";

const ExtracurricularCard = ({ src, title, desc }) => {
  return (
    <div className={` relative lg:my-5 lg:mx-6 my-3 mx-2 extra-card  `}>
      <div>
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadowxl hover:shadow-black/ hover:shadow-30">
          <div className=" ">
            <img className="extra-image" src={src} alt="" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif mt-20 text-3xl font-bold text-white">{desc}</h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularCard;
