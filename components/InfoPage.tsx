import React from "react";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div className="flex flex-col justify-around items-center bg-white h-screen p-8">
      <div className="w-full flex flex-row items-center justify-around mb-8">
        <div className="max-w-md">
          <h1 className="text-5xl text-[#30437A] font-bold">Subject 1</h1>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel ipsum eu volutpat. Nulla placerat elit nec lacus ultricies cursus ut sed mauris. Sed rutrum pharetra velit. Suspendisse dolor risus,
          </p>
        </div>
        <Image
          src="/CNC-CAT-INFO1.png" // replace with the correct path for your image
          width={150}
          height={150}
          alt="Small Cat"
          className="h-auto"
        />
      </div>

      <div className="w-full flex flex-row items-center justify-around">
        <Image
          src="/CNC-CAT-INFO2.png" // replace with the correct path for your image
          width={300}
          height={300}
          alt="Small Cat"
          className="h-auto"
        />
        <div className="max-w-md">
          <h1 className="text-5xl text-[#30437A] font-bold">Subject 1</h1>
          <p className="text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper vel ipsum eu volutpat. Nulla placerat elit nec lacus ultricies cursus ut sed mauris. Sed rutrum pharetra velit. Suspendisse dolor risus,
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
