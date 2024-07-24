import React from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { NavbarTop } from "@/components/top-navbar";
import { ModeToggle } from "@/components/modetoggle";
import PageTitle from "@/components/page-title";
import HoverBorderGradient from "@/components/hover-border-gradient";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FileCheck } from "lucide-react";
import { Globe } from "@/components/globe-temp";

export default function Home() {
  const words = ["Coding", "Photography", "Design"];
  return (
    
    <div className="container" >
      <div className="h-[20rem] pt-20">
        <PageTitle>
          <div className="font-bold mb-2 lg:text-6xl text-4xl mx-auto text-neutral-600 dark:text-neutral-400">
          I Love <span> </span>
          <br className="sm:hidden"/>
          <FlipWords words={words} className="text-primary/50" /> <br />
          </div>    
          <p className="text-neutral-600 dark:text-neutral-400 pt-4">
            Hi! Welcome to <span className="font-semibold" color="text-primary/50">Ryota Kato</span>&apos;s Portfolio! <br />
            I&apos;m a web developer and photographer based in Vancouver, Canada. I&apos;m a passionate coder and photographer. I love to create and capture beautiful things. Feel free to reach out to me! I&apos;m looking forward to hearing from you! 
          </p>
          <div className="flex space-x-3 py-5">
            <HoverBorderGradient link="https://github.com/ryotakc">
              <SiGithub />
              <span>GitHub</span>
            </HoverBorderGradient>
            <HoverBorderGradient link="https://cv-leo.vercel.app/">
              <FileCheck />
              <span>CV</span>
            </HoverBorderGradient>
          </div>  
        </PageTitle>

      </div>    
    </div>

  );
}
