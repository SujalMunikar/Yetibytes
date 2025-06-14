import React from 'react';
import img1 from "../../assets/career/cig.png";
import img3 from "../../assets/career/cig1.webp";
import img2 from "../../assets/career/cig2.webp";

const ImageBox = () => {
  const images = [
    {
      img: img3
    },
    {
      img: img1
    },
    {
      img: img2
    }
  ];

  return (
    <div className="padding py-6 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg overflow-hidden shadow-md w-full aspect-[16/10] md:h-[500px] md:aspect-auto">
  <img
    src={images[0].img}
    alt="Main"
    className="w-full h-full rounded-lg object-cover"
    loading="lazy"
    style={{
      objectPosition: "left",
    }}
  />
</div>

        {/* Right Images stacked vertically */}
        <div className="flex flex-col grid-cols-2 gap-4 h-[500px]">
<div className="rounded-lg overflow-hidden shadow-md flex-1 w-full aspect-[16/10] md:h-auto md:aspect-auto">
  <img
    src={images[1].img}
    alt="Top Right"
    className="w-full h-full object-contain md:object-cover"
    style={{
      objectPosition: "center",
    }}
  />
</div>
          <div className="rounded-lg overflow-hidden shadow-md flex-1 ">
            <img
              src={images[2].img}
              alt="Bottom Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
