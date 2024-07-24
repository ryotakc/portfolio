import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedPin } from "./components/animated-pin";

export default function Home() {
  const words = ["Web Developer", "Photographer", "Designer",];
  return (
    <div className="container">
      <div className="h-[20rem] flex items-center px-0 ">
        <div className="text-3xl lg:text-4xl mx-0 font-fold text-neutral-600 dark:text-neutral-400">
          I Love
          <FlipWords words={words} className="text-primary/50" /> <br />
          Capturing moments, telling stories
        </div>
        
      </div> 
    
    </div>

  );
}
