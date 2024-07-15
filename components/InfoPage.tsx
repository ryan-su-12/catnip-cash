import React from "react";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div className="flex flex-col justify-between items-center p-8 bg-white">
      <div className="flex flex-row">
        <div>
          <h1 className="text-black">SUBJECT 1</h1>
          <p className="text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus expedita hic.
          </p>
        </div>
        <Image
          src="/CNC-CAT-INFO1.png" // replace with the correct path for your image
          width={100}
          height={100}
          alt="Small Cat"
          className="h-auto"
        />
      </div>

      <div className="flex flex-row">
        <Image
          src="/CNC-CAT-INFO2.png" // replace with the correct path for your image
          width={100}
          height={100}
          alt="Small Cat"
          className="h-auto"
        />
        <div>
          <h1 className="text-black">SUBJECT 1</h1>
          <p className="text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus expedita hic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
