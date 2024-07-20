import React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedPin } from "./components/animated-pin";

export default function Home() {
  const words = ["Web Developer", "Photographer", "Designer",];
  return (
    <div className="container">
      <div className="h-[20rem] flex items-center px-4 ">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          I am
          <FlipWords words={words} className="text-primary/50" /> <br />
          websites with Aceternity UI
        </div>
      </div>    
      <div>
        {/* <AnimatedPin /> */}
      </div>
    </div>

  );
}
