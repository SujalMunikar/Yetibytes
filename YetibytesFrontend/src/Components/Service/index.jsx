import React from 'react';
// import image from "../../assets/servicepick.jpg"
// import image from "../../assets/ser.svg"
import image from "../../assets/sert.jpg"

const Index = () => {
  return (
    <div className="w-full bg-gray-100 relative py-6 ">
      <div
        className="absolute top-0 left-0 w-full h-[480px] bg-center bg-cover z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center pt-[200px] px-4 text-white text-center">
      <div className="text-4xl font-bold text-black">Build. Launch. Grow</div>
<div className="mt-1 text-lg max-w-xl text-black">
  Here at YetiBytes, we help you bring your ideas to life.
</div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Index;
