'use client'

import CircleSection from "@/components/circleSection";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";
import { foods } from "@/data/food";
import { useState } from "react";

export default function Home() {

  const [currentIndexFood, setCurrentIndexFood] = useState(3)

  return (
    <div 
      style={{backgroundColor: foods[currentIndexFood].backgroundColor}}
      className="w-full transition-all duration-1000 h-screen flex flex-col overflow-hidden relative px-[4%] pt-[1.5%]">
      <Navbar/>
      <HeroSection setCurrentIndexFood={setCurrentIndexFood}/>
      <CircleSection currentIndexFood={currentIndexFood}/>
      <Slider currentIndexFood={currentIndexFood}/>
      <svg className="w-[170vh] h-[170vh] absolute top-[-45%] left-[-15%]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path className="transition-all duration-1000" fill={foods[currentIndexFood].color} d="M37.5,-63.9C46.3,-52.7,49.5,-38.4,58.6,-24.9C67.7,-11.3,82.8,1.4,82.1,12.4C81.4,23.4,64.9,32.7,51.2,39.2C37.5,45.8,26.6,49.7,15.1,54.5C3.5,59.3,-8.6,65.1,-19.5,63.3C-30.4,61.6,-40,52.3,-52.1,42.7C-64.1,33.1,-78.5,23.3,-84.7,9.5C-90.9,-4.3,-88.9,-22,-78,-31.3C-67,-40.7,-47.2,-41.6,-32.7,-50.2C-18.3,-58.8,-9.1,-75,2.6,-79.1C14.4,-83.2,28.7,-75.1,37.5,-63.9Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}
