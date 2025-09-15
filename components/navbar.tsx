"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "../public/logo.png"
import { ThemeToggle } from "@/components/theme-toggle" // shadcn dark mode toggle
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // change this on login

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["About", "Features", "For Institutions", "Contact"]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900 backdrop-blur-xl shadow-sm"
          : "bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* On mobile only image */}
          <div className="relative">
            <Image alt="Logo" src={logo} width={60} height={60} />
            <div className="absolute inset-0 bg-[#f9a806] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
          </div>
          {/* Hide name on mobile */}
          <h2 className="hidden lg:block text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-[#f9a806]">
            Parth
          </h2>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative py-2 px-1 transition-all duration-300 hover:text-[#f9a806] group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f9a806] transition-all duration-300 group-hover:w-full" />
              <span className="absolute inset-0 bg-[#f9a806]/5 rounded-md scale-0 transition-transform duration-300 group-hover:scale-100" />
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Dark/Light Mode */}
          <ThemeToggle />

          {/* If logged in */}
          {isLoggedIn ? (
            <>
              {/* Desktop: Avatar */}
              <div className="hidden lg:flex">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>

              {/* Mobile: Sidebar with Hamburger */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
                      <Menu className="h-6 w-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col gap-4 mt-6">
                      {navLinks.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          ) : (
            <>
              {/* Before login */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="login"
                  className="px-4 py-2 text-sm font-semibold rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200/60 dark:hover:bg-gray-800 transition-all"
                >
                  Faculty Login
                </Link>
                <Link
                  href="login"
                  className="px-4 py-2 text-sm font-semibold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-all shadow-sm"
                >
                  Student Login
                </Link>
              </div>

              {/* Mobile: only Get Started button */}
              <div className="lg:hidden">
                <Link
                  href="#"
                  className="px-4 py-2 text-sm font-semibold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-all shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
