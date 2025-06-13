import React from 'react';
import image from "../../../../assets/service/123.jpeg";

const  UIUXDesign =()=> {
    return (
         <div className="bg-blue-50 py-16 text-center">
            <div className="text-3xl font-bold mb-4 text-primary">UI/UX Design</div>
            <div className="text-lg mb-12 text-gray-700">
                Create intuitive and aesthetically pleasing designs with our UI/UX experts. We focus on usability, functionality, and the complete user journey.
            </div>
            <div className="w-full flex justify-center">
    
    <img
      src={image}
      alt="UI/UX Design"
//  className="w-full max-w-4x2 h-[500px] object-contain rounded-lg"
 className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl h-48 sm:h-64 md:h-[350px] lg:h-[500px] object-contain rounded-lg"
 style={{ backgroundColor: 'white' }}
    />
  </div>
            
        </div>
    );
}

export default UIUXDesign;