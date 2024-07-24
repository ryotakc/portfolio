import React from "react";
import Image from "next/image";
import { TabsPhoto } from "./components/tabs-photo";
import PageTitle from "@/components/page-title";
import { FlipWords } from "@/components/ui/flip-words";
import HoverBorderGradient from "@/components/hover-border-gradient";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FileCheck, Instagram, Mail } from "lucide-react";
import { HeroParallax } from "./components/hero-parallax";
import { ImagesSliderAni } from "@/app/photography/components/image-slider-ani";

export default function Home() {
  const words = ["Photography", "Retouch", "Editing"];
  return (
    <div className="container">
      <div className="h-[20rem] flex items-center px-0 mt-10 ">
        {/* <div className="text-3xl lg:text-4xl mx-0 font-fold text-neutral-600 dark:text-neutral-400">
          I Love
          <FlipWords words={words} className="text-primary/50" /> <br />
          Capturing moments, telling stories
        </div> */}
        <PageTitle>
          <div className="font-bold mb-2 lg:text-6xl text-4xl mx-auto text-neutral-600 dark:text-neutral-400">
          I Love <span> </span>
          <br className="sm:hidden"/>
          <FlipWords words={words} className="text-primary/50" /> <br />
          </div>    
          <p className="text-neutral-600 dark:text-neutral-400 py-4">
            Photography is an art form that captures the world around me, preserving moments in time forever. Our service offers professional skills and creative perspectives to beautifully document your precious moments.
          </p>
          <div className="flex space-x-3 py-3">
            <HoverBorderGradient link="../contact">
              <Instagram />
              <span>Instagram</span>
            </HoverBorderGradient>
          </div>  
        </PageTitle>
      </div> 
      <div className="py-10">
        <ImagesSliderAni /> 
      </div>
    
    </div>



  );
}
