'use client'
import AnimateSection from "@/components/content/animateSection";
import HeroSection from "@/components/content/heroSection";
import Slider from "@/components/content/slider";
import Nav from "@/components/nav";
import { foods } from "@/data/food";
import { useState } from "react";

export default function Home() {

  const [currentFood, setCurrentFood] = useState(0)

  return (
    <div
      style={{backgroundColor: foods[currentFood].backgroundColor}} 
      className="w-full h-screen overflow-hidden transition-all duration-1000 flex flex-col pt-[2%] relative">
      <Nav/>
      <HeroSection currentFood={currentFood} setCurrenFood={setCurrentFood}/>
      <AnimateSection currentFood={currentFood}/>
      <Slider currentFood={currentFood}/>
      <svg className='absolute top-[-50%] left-[-30%] w-[200vh] h-[200vh]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-1000" fill={foods[currentFood].color} d="M40,-63.5C53.9,-53.3,68.7,-45.7,76.7,-33.5C84.6,-21.3,85.6,-4.4,78.5,7.9C71.4,20.1,56.2,27.8,43.6,32.2C31.1,36.5,21.2,37.6,11.7,41C2.1,44.3,-7.1,50.1,-21.2,54.2C-35.2,58.3,-54.1,60.7,-65.4,53.4C-76.7,46.2,-80.4,29.1,-82.3,12.2C-84.1,-4.7,-84,-21.5,-77.9,-35.8C-71.7,-50,-59.4,-61.6,-45.4,-71.7C-31.4,-81.8,-15.7,-90.4,-1.3,-88.3C13,-86.3,26.1,-73.6,40,-63.5Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}
