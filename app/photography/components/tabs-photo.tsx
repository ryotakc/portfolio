"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';



export function TabsPhoto() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="aspect-[3/2] overflow-hidden relative rounded-2xl p-1 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Product Tab</p> */}
          <Content />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="aspect-[3/2] overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Services tab</p> */}
          <Content />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="aspect-[3/2] overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Playground tab</p> */}
          <Content />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="aspect-[3/2] overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Content tab</p> */}
          <Content />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="aspect-[3/2] overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p>Random tab</p> */}
          <Content />
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>    
      
    </div>

  );
}

const Content = () => {
  return (
    <div className="w-full h-full">
      <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/photograph/pic1.jpg" srcSet="/photograph/pic1.jpg" alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src="/photograph/pic2.jpg" srcSet="/photograph/pic2.jpg" alt="Image two" />}
      className="object-cover  absolute top-4 inset-x-0 w-[95%] rounded-xl mx-auto"
      />

    </div>
  );
};
