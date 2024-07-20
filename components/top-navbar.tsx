"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarTop() {
  return (
    <div className="relative w-full flex items-center justify-center">
      
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    
    <div
      // className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto z-50 p-2", className)}
      className="fixed top-4 inset-x-0 max-w-xl mx-auto z-50 p-2"
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <div className="absolute item-center justify-center left-3">
              <h1 className="font-bold text-2xl hover:scale-110 transition-transform duration-300">
                <Link href="/">
                  <div className="flex">
                    <Image
                      src="/profile.webp"
                      alt="profile"
                      width={32}
                      height={32}
                      className="rounded-md"
                    />
                    <span className="ml-2">leo</span>
                  </div>
                </Link>
              </h1>
            </div>
          </div>

          <div className="flex space-x-4 ">
            <MenuItem setActive={setActive} active={active} item="Work">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Photography">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Others">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
