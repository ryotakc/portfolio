import React from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { NavbarTop } from "@/components/top-navbar";
import { ModeToggle } from "@/components/modetoggle";

export default function Home() {
  const words = ["Coding", "Photography", "Design"];
  return (
    <div className="container">
      <div className="h-[40rem] flex items-center px-4 ">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          I Love
          <FlipWords words={words} className="text-primary/50" /> <br />
          websites with Aceternity UI
        </div>
        {/* <div>
          <NavbarTop />
          <ModeToggle />
        </div> */}
      </div>    
    </div>

  );
}
