import AirMaxIntro from "@/components/landingpage/AirMaxIntro";
import BestOfAirMax from "@/components/landingpage/BestOfAirMax";
import Featured from "@/components/landingpage/Featured";
import Hero from "@/components/landingpage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AirMaxIntro/>
      <BestOfAirMax/>
      <Featured/>
    </div>
  );
}
