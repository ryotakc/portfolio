"use client";
import React from "react";
import { PinContainer } from "../../../components/ui/3d-pin";
import Image from "next/image";
import { useEffect, useState } from 'react';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}


export function AnimatedPin() {
  const hasMounted = useHasMounted();

  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="leok.vercel.app"
        href="https://leok.vercel.app"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          {hasMounted ? (
            <div className="flex flex-1 w-full rounded-lg mt-4 relative overflow-hidden">
              <Image
                src="/projectsPhoto/project1.jpg" // ここに画像のパスを指定
                alt="pic1"
                layout="fill"
                objectFit="cover" // 画像が要素にフィットするように指定
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          )}
        </div>
      </PinContainer>
    </div>
  );
}



