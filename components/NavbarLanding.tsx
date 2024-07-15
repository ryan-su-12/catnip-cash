import React from "react";
import Image from "next/image";

const NavbarLanding = () => {
  return (
    <nav className="bg-yellow-200 h-14 shadow-md py-2 px-4 flex flex-row justify-between items-center w-full">
      <div className="flex items-center gap-10">
        <Image
          src="/CNC-NAV-LOGO.png"
          width={75}
          height={50}
          alt="Catnip Cash Logo"
          className="h-35 w-75"
        />

        <ul className="flex flex-start space-x-8">
          <li>
            <a href="#" className="text-black font-bold">
              Browse
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold">
              Get Desktop
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold">
              Try Prime
            </a>
          </li>
        </ul>
       
      </div>
      <div className="flex items-center justify-center ">
      <Image
        src="/CNC-NAV-CHIPS.png"
        width={75}
        height={50}
        alt="Catnip Cash Logo"
        className="flex justify-between items-center"
      />
      </div>

     
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div>
            <div className="text-sm font-bold">Hector023</div>
            <div className="text-xs text-gray-600">Hunter_aviator23</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;
