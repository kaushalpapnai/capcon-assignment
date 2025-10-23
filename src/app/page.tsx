import AirMaxIntro from "@/components/landingpage/AirMaxIntro";
import BestOfAirMax from "@/components/landingpage/BestOfAirMax";
import DontMiss from "@/components/landingpage/DontMiss";
import Essentials from "@/components/landingpage/Essentials";
import Featured from "@/components/landingpage/Featured";
import GearUp from "@/components/landingpage/GearUp";
import Hero from "@/components/landingpage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-12">
      <Hero/>
      <AirMaxIntro/>
      <BestOfAirMax/>
      <Featured/>
      <GearUp/>
      <DontMiss/>
      <Essentials/>
    </div>
  );
}
