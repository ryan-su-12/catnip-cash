import Bricks from "@/components/Bricks";
import InfoPage from "@/components/InfoPage";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import NavbarLanding from "@/components/NavbarLanding";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
     <NavbarLanding/>
      <LandingPage />
      <InfoPage/>
    
    </main>
  );
}
