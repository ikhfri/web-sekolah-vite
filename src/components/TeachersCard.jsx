import React from "react";

const TeachersCard = ({ nama, ttl, nip, role }) => {
  return (
    <div class="teachers-card  mt-10 flex flex-col rounded-[15px] bg-white shadow-lg shadow-[#666464] md:max-w-md md:flex-row">
      <img className="w-[120px] ml-5" src="images/curriculum/foto3.svg" alt="" />
      <div class="flex flex-col justify-start p-6">
        <h5 class="text-lg font-medium  ">{nama}</h5>
        <p class="text-lg font-medium text-[black]">{ttl}</p>
        <p class=" text-lg font-medium text-[black]">{nip}</p>
        <p class=" text-lg font-medium text-[black]">{role}</p>
      </div>
    </div>
  );
};

export default TeachersCard;
