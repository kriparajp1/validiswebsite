"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Documentation", href: "#docs" },
  { name: "Installation", href: "#installation" },
];

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" style={{ marginLeft: '24px' }}>
            <span className="font-bold ">Validis</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Popover key={item.name}>
                <PopoverTrigger asChild>
                  <button
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </button>
                </PopoverTrigger>
                {item.name === "Installation" && (
                  <PopoverContent className="w-auto">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Installation</h4>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred package manager:
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Button
                            onClick={() => navigator.clipboard.writeText('npm install validis')}
                            variant="outline"
                          >
                            npm
                          </Button>
                          <code className="text-sm">npm install validis</code>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                          <Button
                            onClick={() => navigator.clipboard.writeText('yarn add validis')}
                            variant="outline"
                          >
                            yarn
                          </Button>
                          <code className="text-sm">yarn add validis</code>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                )}
              </Popover>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => scrollToSection('docs')} 
              variant="outline" 
              className="hidden md:flex"
            >
              Get Started
            </Button>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="https://github.com/kriparajp1/validis">
                GitHub
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href.slice(1));
                        document.querySelector('[data-state="open"]')?.removeAttribute('data-state');
                      }}
                      className="block py-2 text-sm font-medium transition-colors hover:text-primary text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

