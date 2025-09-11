"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20"
            : "bg-gray-50/80 backdrop-blur-lg",
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <svg
                className="h-8 w-8 text-[#f9a806] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_535)">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute inset-0 bg-[#f9a806] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#f9a806]">
              Parth
            </h2>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            {["Dashboard", "Features", "For Institutions", "Contact"].map((item) => (
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

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-semibold rounded-full text-gray-700 hover:bg-gray-200/60 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Faculty Login
            </Link>
            <Link
              href="#"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-[#f9a806] text-gray-900 hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f9a806]/25 transform"
            >
              Student Signup
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f9a806]/20"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out",
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1",
                )}
              />
            </div>
          </button>
        </nav>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200/20",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {["Dashboard", "Features", "For Institutions", "Contact"].map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  onClick={closeMenu}
                  className={cn(
                    "py-3 px-4 text-gray-700 hover:text-[#f9a806] hover:bg-[#f9a806]/5 rounded-lg transition-all duration-300 transform",
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  )}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200/30">
                <Link
                  href="#"
                  onClick={closeMenu}
                  className={cn(
                    "py-3 px-4 text-center text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 transform",
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  )}
                  style={{
                    transitionDelay: isMenuOpen ? "200ms" : "0ms",
                  }}
                >
                  Faculty Login
                </Link>
                <Link
                  href="#"
                  onClick={closeMenu}
                  className={cn(
                    "py-3 px-4 text-center bg-[#f9a806] text-gray-900 hover:bg-yellow-400 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  )}
                  style={{
                    transitionDelay: isMenuOpen ? "250ms" : "0ms",
                  }}
                >
                  Student Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
