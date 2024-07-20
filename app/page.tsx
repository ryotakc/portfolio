import React from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { NavbarTop } from "@/components/top-navbar";
import { ModeToggle } from "@/components/modetoggle";
import PageTitle from "@/components/page-title";
import HoverBorderGradient from "@/components/hover-border-gradient";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FileCheck } from "lucide-react";

export default function Home() {
  const words = ["Coding", "Photography", "Design"];
  return (
    <div className="container" >
      <div className="h-[20rem] flex items-center ">
        <PageTitle>
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          I Love
          <FlipWords words={words} className="text-primary/50" /> <br />
          websites with Aceternity UI
          </div>    
          <div className="flex space-x-3 py-5">
            <HoverBorderGradient link="https://github.com/ryotakc">
              <SiGithub />
              <span>GitHub</span>
            </HoverBorderGradient>
            <HoverBorderGradient link="https://cv-leo.vercel.app/">
              <FileCheck />
              <span>My CV</span>
            </HoverBorderGradient>
          </div>  
        </PageTitle>

      </div>    
    </div>

  );
}
