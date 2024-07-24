import React from 'react';
import { HoverBorderGradient as HoverBorderGradientComponent } from "./ui/hover-border-gradient";
import { SiGithub } from '@icons-pack/react-simple-icons';


export default function HoverBorderGradient({
    link,
    children
}: {
    link?: string,
    children: React.ReactNode
}) {
    return (
        <a href={link} className="flex justify-center text-center">
            <HoverBorderGradientComponent
            containerClassName="rounded-[15px]"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
            {children}
            </HoverBorderGradientComponent>
      </a>
    )
}
