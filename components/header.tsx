'use client';

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./modetoggle"
import { CommandHome } from "./command-search";
import { SheetMenu } from "./sheet-menu";


export const navItems = [
    { label: "Work", href: "/work" },
    { label: "Photography", href: "/photography" },
    { label: "Contact", href: "/contact" },
  ]

export default function Header(){
    return (
        <div className="container h-16 flex items-center border-b justify-between text-primary">
            <h1 className="font-bold text-2xl hover:scale-110 transition-transform duration-300">
                <Link href="/">
                    <div className="flex">
                    <Image src="/profile.webp" alt="profile" width={32} height={32} className="rounded-md" />
                    <span className="ml-2">leo</span>
                    </div>
                </Link>
                </h1>
                <ul className="flex gap-1">
                {navItems.map((item) => (
                    <li key={item.label} className="hidden sm:block hover:scale-105 transition-transform duration-300">
                    <Button variant="ghost" asChild>
                        <Link href={item.href}>{item.label}</Link>
                    </Button>
                    </li>
                ))}
              <div className="hover:scale-105 transition-transform duration-300">
                <CommandHome />
              </div>
              <div className="hidden sm:block">
                <ModeToggle />
              </div>
              <li className="block sm:hidden">
                <SheetMenu/>
              </li>
                </ul>        
        </div>


    )
}
