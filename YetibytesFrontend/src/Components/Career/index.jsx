import React from 'react';
import img1 from "../../assets/career/hep.jpg";


const CareerPage = () => {
  return (
    <div className=" w-full relative py-4">
      <div
        className="w-full h-[480px] padding bg-center bg-cover"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?t=st=1745201779~exp=1745205379~hmac=f0a38c982e14d9642034357f5a729634cb7fc956a06f4a37ec682c56c244357a&w=1380')`,
        }}
      >
        <div className=" py-4 flex flex-col md:flex-row items-center h-full">
          <div className="w-full layout-padding px-4 md:w-1/2 text-center md:text-left py-4">
            <div className="text-primary font-semibold mb-2">- LIFE AT YETIBYTES</div>
            <div className="text-4xl  text-black  mb-4">
              Build your Portfoilo,<br />
              We provide the Expertise
            </div>
            <div className="text-gray-500 mb-6 max-w-lg">
              At YetiBytes, we believe that great things happen when passion meets opportunity. Whether you're just starting out or looking to take your career to the next level, we provide the tools, mentorship, and environment to help you thrive. Come as you are—and let's build something extraordinary together.
            </div>
            <button className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Explore open roles
            </button>
          </div>

<div
  className="hidden md:flex w-full md:w-1/2 mt-10 md:mt-0 justify-center md:justify-end py-4"
  style={{
    position: "relative",
    left: "-2cm",   // Move 5cm to the left
    top: "4.5cm",    // Move 20cm down
    zIndex: 10,
  }}
>
  <div className="relative w-full max-w-xs aspect-square rounded-se-[90px] rounded-es-[50px] overflow-hidden shadow-lg">
    <img
      src={img1}
      alt="Team members working together"
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>
          </div>
      </div>
    </div>
  );
};

export default CareerPage;
