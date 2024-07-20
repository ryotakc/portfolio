import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { Github, Instagram,  Linkedin, Mail, Twitter } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CommandHome } from "@/components/command-search";
import { ModeToggle } from "@/components/modetoggle";
import { SheetMenu } from "@/components/sheet-menu";

const inter = Inter({ subsets: ["latin"] });

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Photography", href: "/photography" },
  { label: "Contact", href: "/contact" },
]

export const metadata: Metadata = {
  title: {
    template: "%s | leo",
    default: "leo",
  },
  description: "Leo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black bg-white  dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <header className="container h-16 flex items-center border-b justify-between text-primary">
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
                <SheetMenu />
              </li>
            </ul>
          </header>

          <main className="dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative flex justify-center min-h-screen">
            {children}
          </main>


          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
