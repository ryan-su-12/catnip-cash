'use client';

import React from 'react';
import Image from 'next/image';
import Bricks from './Bricks';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/register'); // Replace with the path you want to redirect to
  };

  return (
    <div
    className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('/CNC-LANDING-BACKGROUND.png')" }}
  >
    <div className="h-screen flex items-center justify-center">
      <div
        className="bg-white p-8 rounded-lg shadow-lg mr-auto ml-32 mb-16 flex flex-col justify-between"
        style={{ width: "685px", height: "450px" }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-black">
            GROW YOUR SAVINGS
          </h1>
          <h1 className="text-4xl font-bold mb-4 text-black">
            FEED YOUR FURBALL
          </h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            semper vel ipsum eu volutpat. Nulla placerat elit nec lacus
            ultricies cursus ut sed mauris. Sed rutrum pharetra velit.
            Suspendisse dolor risus,
          </p>
          <button onClick = {handleRedirect} className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
            Sign up
          </button>
          <div className="absolute bottom-0 left-12">
          <Image
            src="/CNC-CAT.png"
            width={250}
            height={250}
            alt="Catnip Cash Logo"
            className="h-35 w-75"
          />
        </div>
        </div>
        
      </div>

      <Image
        src="/CNC-SIDE.png"
        width={250}
        height={250}
        alt="Catnip Cash Logo"
        className="h-35 w-75"
      />
    </div>
    <Bricks />
  </div>
  );
};

export default LandingPage;
