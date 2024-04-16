import React from "react";
import TeachersCard from "../components/TeachersCard";
import TeachersData from "../data/teachersData.json";
import StaffsData from "../data/staffsData.json";
const Curriculum = () => {
  return (
    <section className="relative w-full bg-light-three overflow-hidden py-28" id="news">
      <div className="absolute w-full h-[450px] bg-[#444444] top-0 left-0"></div>
      <div className="relative z-10  px-16 mx-auto">
        <div className="text-center mb-8">
          <h3 className="pt-9 title text-light-one before:text-light-one after:bg-light-one after:w-[450px]">TEACHERS & STAFFS</h3>
        </div>
      </div>
      <div className="relative mt-[50px] mx-auto flex justify-center">
        <img src="images/curriculum/foto1.svg" alt="" className="block " />
      </div>
      <div className="text-center mb-8">
        <h3 className="mt-10 title text-black before:text-black after:bg-black after:w-[250px]">PRINCIPLE</h3>
      </div>
      <div className="relative flex">
        <img className="block ml-[100px]" src="images/curriculum/foto2.svg" alt="" />
        <div>
          <p className=" text-4xl mt-3">Nama : Kilta Aufa Qorina</p>
          <p className=" text-4xl mt-5">Date/Place of Birth : 6th march 2005 </p>
          <p className=" text-4xl mt-5">ID Number : 909090 </p>
          <div className="flex mt-[60px]">
            <img className="" src="images/curriculum/yt.svg" alt="" />
            <img className="ml-4 " src="images/curriculum/ig.svg" alt="" />
            <img className="ml-4" src="images/curriculum/github.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center mb-">
        <h3 className="mt-10 title text-black before:text-black after:bg-black after:w-[250px]">TEACHERS</h3>
      </div>
      <div class=" justify-center ">
        <div className="w-full grid grid-cols-2 place-items-center mt-6 ">
          {TeachersData.map((teachersData) => {
            return <TeachersCard nama={teachersData.nama} ttl={teachersData.ttl} nip={teachersData.nip} role={teachersData.role} />;
          })}
        </div>
      </div>
      <div className="text-center mb-8">
        <h3 className="mt-10 title text-black before:text-black after:bg-black after:w-[180px]">STAFFS</h3>
      </div>
      <div className="w-full grid grid-cols-2 place-items-center mt-6 ">
        {StaffsData.map((staffsData) => {
          return <TeachersCard nama={staffsData.nama} ttl={staffsData.ttl} nip={staffsData.nip} role={staffsData.role} />;
        })}
      </div>
    </section>
  );
};

export default Curriculum;
